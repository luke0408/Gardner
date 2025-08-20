import * as graphOperation from "./graphql/operations";
import * as githubQueries from "./graphql/github.queries";

export type Merge<F, S> = {
  [K in keyof (F & S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
};
