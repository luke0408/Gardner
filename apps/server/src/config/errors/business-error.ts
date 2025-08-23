import { ERROR } from ".";

export interface NOT_FOUND_GITHUB_USER extends ERROR {
  type: "business";
  result: false;
  code: 4001;
  data: "username에 해당하는 github user를 찾을 수 없습니다.";
}
