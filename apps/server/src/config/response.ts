export const response = (data: Data, result: any) => {
  return {
    isSuccess: data.isSuccess,
    code: data.code,
    message: data.message,
    result: result,
  };
};
