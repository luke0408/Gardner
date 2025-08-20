import * as graphOperation from "./graphql/operations";
import * as githubQueries from "./graphql/github.queries";
import { ERROR } from "../config/errors";

export type Merge<F, S> = {
  [K in keyof (F & S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
};

interface ResponseForm<T> {
  result: true;
  code: 1000;
  requestToResponse?: `${number}ms`;
  data: T;  
}

interface PaginationForm<T extends PaginationType.InitialPaginationResponseType> {
  result: true;
  code: 1000;
  requestToResponse?: `${number}ms`;
  data: PaginationType.PaginationResponseType<T>;
}

namespace PaginationType {
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
}

export type Try<T> = ResponseForm<T>;
export type TryCatch<T, E extends ERROR> = ResponseForm<T> | E;
export type TryPagination<T extends PaginationType.InitialPaginationResponseType> = PaginationForm<T>;
export type TryCatchPagination<T extends PaginationType.InitialPaginationResponseType, E extends ERROR> = PaginationForm<T> | E;
