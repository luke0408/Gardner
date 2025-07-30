import { gql } from './client';

const contributionQuery = gql`
  query ($username: String!) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            color
          }
        }
      }
    }
  }
`;

module.exports = { contributionQuery };
