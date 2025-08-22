import { Merge } from "../../types";

export interface ERROR { 
  type: string;
  result: false; 
  code: number; 
  data: string;
};

export const isBusinessErrorGuard = (obj: any): obj is Merge<ERROR, {type: 'business'}> => {
  if(isErrorGuard(obj)) {
    if(obj.type === 'business') {
      return true;
    }
  }
  return false;
};

const isErrorGuard = (obj: any): obj is ERROR => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'result' in obj &&
    (obj as any).result === false
  );
};
