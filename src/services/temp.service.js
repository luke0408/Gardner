import { tempResponseDTO } from '../dtos/temp.response.dto';

export const getTempData = () => {
  return tempResponseDTO("this is TEST");
}