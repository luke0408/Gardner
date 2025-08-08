import { tags } from "typia";

/**
 * A collection of contributions made by a {@link IGithubUser}, 
 * including opened issues, commits, and pull requests. 
 */
export interface IContributionsCollection {
  /**
   * A calenar of this {@link IGithubUser}'s contributions.
   */
  contributionCalendar: IContributionCalenadar;
}

/**
 * A calendar of contributions made by a {@link IGithubUser}.
 */
export interface IContributionCalenadar {
  /**
   * The count of total contributions in the calender.
   */
  totalContributions: number;

  /**
   * A list of the weeks of contributions in this calendar.
   */
  weeks: IContributionCalendarWeek[];
}

/**
 * A week of contributions in a {@link IGithubUser} contribution graph.
 */
export interface IContributionCalendarWeek {
  /**
   * The days of contributnios in this week
   */
  contributionDays: IContributionCalendarDay[];
}

/**
 * Represents a single day of contributions on Github by a {@link IGithubUser}.
 */
export interface IContributionCalendarDay {
  /**
   * The day this square represents.
   */
  date: string & tags.Format<"date">;

  /**
   * How many contributions were made by the user on this Day.
   */
  contributionCount: number & tags.Minimum<0>;

  /**
   * The `hex` color code that represents how many contributions
   * were made on this day compared to other in the calendar.
   */
  color: string & tags.Pattern<"/^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/">;
}