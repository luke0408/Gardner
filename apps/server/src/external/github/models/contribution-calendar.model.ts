import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ContributionDay {
  @Field(() => Int)
  contributionCount: number;

  @Field()
  date: string;

  constructor(contributionDay: ContributionDay) {
    this.contributionCount = contributionDay.contributionCount;
    this.date = contributionDay.date;
  }
}

@ObjectType()
export class ContributionWeek {
  @Field(() => [ContributionDay])
  contributionDays: ContributionDay[];

  constructor(contributionWeek: ContributionWeek) {
    this.contributionDays = contributionWeek.contributionDays;
  }
}

@ObjectType()
export class ContributionCalendar {
  @Field(() => Int)
  totalContributions: number;

  @Field(() => [ContributionWeek])
  weeks: ContributionWeek[];

  constructor(contributionCalendar: ContributionCalendar) {
    this.totalContributions = contributionCalendar.totalContributions;
    this.weeks = contributionCalendar.weeks;
  }
}
