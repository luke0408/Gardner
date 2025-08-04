import { BaseError } from "../config/error";
import { tempResponseDTO } from "../dtos/temp.response.dto";
import { status } from "../config/response.status";

export const getTempData = () => {
  return tempResponseDTO("this is TEST");
};

export const CheckFlag = (flag) => {
  if (flag == 1) {
    throw new BaseError(status.BAD_REQUEST);
  } else {
    return flagResponseDTO(flag);
  }
};
