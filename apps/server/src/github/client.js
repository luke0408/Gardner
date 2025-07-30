import { GraphQLClient, gql } from 'graphql-request';
require('dotenv').config();

const endpoint = 'https://api.github.com/graphql';

const githubClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

module.exports = { githubClient, gql };
