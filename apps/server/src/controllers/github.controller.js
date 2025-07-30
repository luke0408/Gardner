import { status } from '../../config/response.status';
import { getUserContributions } from '../services/github.service';
import { response } from '../../config/response';

export const userContributions = (req, res, next) => {
  res.send(response(status.SUCCESS, getUserContributions(req.params.username)));
};
