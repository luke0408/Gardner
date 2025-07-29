import { tempResponseDTO } from '../dtos/temp.response.dto';

export const getTempData = () => {
  return tempResponseDTO("this is TEST");
}

export const CheckFlag = (flag) => {
  if(flag == 1) {
    throw new Error("flag is 1");
  } else {
    return flagResponseDTO(flag);
  }
}