import { BaseError } from "../config/error";
import { status } from "../config/response.status";
import { githubClient } from "../github/client";
import { contributionQuery } from "../github/query";

export const getUserContributions = async (username) => {
  try {
    const data = await githubClient.request(contributionQuery, { username });
    return data;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};
