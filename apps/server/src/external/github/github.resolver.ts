import { Args, Query, Resolver } from '@nestjs/graphql';
import { GithubService } from './github.service';
import { GetUserContributionInput } from './dto/get-user-contribution.input';
import { ContributionCalendar } from './models/contribution-calendar.model';

@Resolver()
export class GithubResolver {
  constructor(private readonly githubService: GithubService) {}

  @Query(() => ContributionCalendar)
  async userContributionCalendar(
    @Args('input') input: GetUserContributionInput,
  ): Promise<ContributionCalendar> {
    return this.githubService.getUserContributionCalendar(input.username);
  }
}
