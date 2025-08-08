import { tags } from "typia"

/**
 * A GihubUser is and individual's account on Github 
 * that owns repositories and can make new content.
 */
export interface IGithubUser {
  /**
   * The username used to login to GitHub.
   */
  login: string;

  /**
   * The user's public profile name.
   */
  name?: string;

  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: string & tags.Format<"uri">;

  /**
   * The HTTP URL for this user.
   */
  url: string & tags.Format<"uri">
}