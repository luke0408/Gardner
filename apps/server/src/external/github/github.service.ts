import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

    const token = this.configService.get<string>('GITHUB_PERSONAL_ACCESS_TOKEN');
    if(!token) {
      throw new InternalServerErrorException('Missing Github access token');
    }

    const endpoint = 
      this.configService.get<string>('GITHUB_GRAPHQL_URL') ?? 'https://api.github.com/graphql';

    const response = await firstValueFrom(
      this.httpService.post<{ data: GetContributionCalenderQuery }>(
        endpoint,
        {
          query,
          variables,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'User-Agent': 'garder-server',
          },
        },
      ),
    );

    const user = response.data.data.user;
    if(!user) {
      throw new NotFoundException(`User ${username} not found`);
    }

    const contributionCalendar = user.contributionsCollection.contributionCalendar;
    return new ContributionCalendar(contributionCalendar);
  }
}