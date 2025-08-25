import gql from "graphql-tag";

export const GET_CONTRIBUTION_CALENDAR = gql`
  query getContributionCalendar($username: String!) {
    user(login: $username) {
      login
      name
      avatarUrl
      url
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
  }
`;
