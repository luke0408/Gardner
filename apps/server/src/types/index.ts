import * as graphOperation from "./graphql/operations";
import * as githubQueries from "./graphql/github.queries";
import { ERROR } from "../config/errors/error";

export type Merge<F, S> = {
  [K in keyof (F & S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
};

export interface ResponseForm<T> {
  result: true;
  code: 1000;
  requestToResponse?: `${number}ms`;
  data: T;  
}

export interface PaginationForm<T extends InitialPaginationResponseType> {
  result: true;
  code: 1000;
  requestToResponse?: `${number}ms`;
  data: PaginationResponseType<T>;
}

export interface InitialPaginationResponseType {
  list: any[];
  count: number;
}

export interface PaginationResponseType<T extends InitialPaginationResponseType> {
  list: T["list"];
  count: T["count"];
  totalResult: number;
  totalPage: number;
  search?: string;
  page: number;
}

type ERROR = { result: false; code: number; data: string };
type KeyOfError = keyof typeof ERROR;
type ValueOfError = (typeof ERROR)[KeyOfError];

export type Try<T> = ResponseForm<T>;
export type TryCatch<T, E extends ERROR> = ResponseForm<T> | E;
export type TryPagination<T extends InitialPaginationResponseType> = PaginationForm<T>;
export type TryCatchPagination<T extends InitialPaginationResponseType, E extends ValueOfError> = PaginationForm<T> | E;
