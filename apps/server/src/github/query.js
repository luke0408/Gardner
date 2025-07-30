import { gql } from './client';

const contributionQuery = gql`
  query ($username: String!) {
    contributionsCollection {
      contributionYears
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            weekday
          }
        }
      }
    }
  }
`;

module.exports = { contributionQuery };
