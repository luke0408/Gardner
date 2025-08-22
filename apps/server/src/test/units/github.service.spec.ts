import { Test, TestingModule } from '@nestjs/testing';
import { GithubService } from '../../external/github/github.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { of } from 'rxjs';
import { print } from 'graphql';
import { GET_CONTRIBUTION_CALENDAR } from '../../types/graphql/github.queries';
import { ContributionCalendar } from '../../external/github/models/contribution-calendar.model';
import { describe, it, beforeEach, mock } from 'node:test';
import assert from 'node:assert';

describe('GithubService', () => {
  let service: GithubService;
  let mockHttpService: { post: ReturnType<typeof mock.fn> };

  beforeEach(async () => {
    // Re-create mocks for each test to ensure isolation
    mockHttpService = {
      post: mock.fn(),
    };
    const mockConfigService = {
      get: mock.fn(() => 'test_token'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubService,
        { provide: HttpService, useValue: mockHttpService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    assert.ok(service);
  });

  describe('getUserContributionCalendar', () => {
    it('should return a contribution calendar', async () => {
      const username = 'testuser';
      const mockResponse = {
        data: {
          data: {
            user: {
              contributionsCollection: {
                contributionCalendar: {
                  totalContributions: 100,
                  weeks: [],
                },
              },
            },
          },
        },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      };

      mockHttpService.post.mock.mockImplementationOnce(() => of(mockResponse));

      const result = await service.getUserContributionCalendar(username);

      assert.ok(result instanceof ContributionCalendar);
      assert.strictEqual(result.totalContributions, 100);
      assert.strictEqual(mockHttpService.post.mock.calls.length, 1);
      assert.deepStrictEqual(mockHttpService.post.mock.calls[0].arguments, [
        'https://api.github.com/graphql',
        {
          query: print(GET_CONTRIBUTION_CALENDAR),
          variables: { username },
        },
        {
          headers: {
            Authorization: `Bearer test_token`,
          },
        },
      ]);
    });
  });
});
