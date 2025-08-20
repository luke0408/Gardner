import { InitialPaginationResponseType, PaginationForm, Try } from "../../types";

const calcListTotalCount = (totalCount = 0, limit = 0): { totalResult: number, totalPage: number } => {
  const totalResult = totalCount;
  const totalPage = totalResult % limit === 0 ? totalResult / limit : Math.floor(totalResult / limit) + 1;
  return { totalResult, totalPage };
};

export function createPaginationForm<ResponseType extends InitialPaginationResponseType>(
  responseData: ResponseType,
  paginationInfo: { limit: number; page: number; search?: string },
  requestToResponse?: `${number}ms`,
): PaginationForm<ResponseType> {
  const {limit, page, search } = paginationInfo;
  const { totalResult, totalPage } = calcListTotalCount(responseData.count, limit);
  return {
    result: true,
    code: 1000,
    requestToResponse,
    data: {
      list: responseData.list,
      count: responseData.count,
      page,
      totalResult,
      totalPage,
      search,
    },
  };
}

export function createResponseForm<T>(data: T, requestToResponse?: `${number}ms`): Try<T> {
  return {
    result: true,
    code: 1000,
    requestToResponse,
    data,
  } as const;
}