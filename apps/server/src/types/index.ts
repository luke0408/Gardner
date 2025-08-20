import * as graphOperation from "./graphql/operations";
import * as githubQueries from "./graphql/github.queries";

export type Merge<F, S> = {
  [K in keyof (F & S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
};

interface ResponseForm<T> {
  result: true;
  code: 1000;
  requestToResponse?: `${number}ms`;
  data: T;  
}

interface ErrorForm { 
  result: false; 
  code: number; 
  data: string;
};

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
export type TryCatch<T, E extends ErrorForm> = ResponseForm<T> | E;
export type TryPagination<T extends PaginationType.InitialPaginationResponseType> = PaginationForm<T>;
export type TryCatchPagination<T extends PaginationType.InitialPaginationResponseType, E extends ErrorForm> = PaginationForm<T> | E;
