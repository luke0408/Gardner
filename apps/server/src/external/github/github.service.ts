import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { print } from 'graphql';
import { GET_CONTRIBUTION_CALENDAR } from '../../types/graphql/github.queries';
import {
  GetContributionCalenderQuery,
  GetContributionCalenderQueryVariables,
} from '../../types/graphql/operations';
import { ContributionCalendar } from './models/contribution-calendar.model';

@Injectable()
export class GithubService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getUserContributionCalendar(
    username: string,
  ): Promise<ContributionCalendar> {
    const query = print(GET_CONTRIBUTION_CALENDAR);
    const variables: GetContributionCalenderQueryVariables = { username };

    const response = await firstValueFrom(
      this.httpService.post<{ data: GetContributionCalenderQuery }>(
        'https://api.github.com/graphql',
        {
          query,
          variables,
        },
        {
          headers: {
            Authorization: `Bearer ${this.configService.get('GITHUB_PERSONAL_ACCESS_TOKEN')}`,
          },
        },
      ),
    );

    const contributionCalendar =
      response.data.data.user!.contributionsCollection.contributionCalendar;

    return new ContributionCalendar(contributionCalendar);
  }
}