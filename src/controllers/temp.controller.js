import { status } from "../../config/response.status";
import { getTempData } from '../services/temp.service';
import { response } from "../../config/response";

export const tempTest = (req, res, next) => {
  res.send(response(status.SUCCESS, getTempData()));
}