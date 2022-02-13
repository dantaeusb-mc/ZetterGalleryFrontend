import { TransformFnParams } from 'class-transformer';

export const csvToArray = (params: TransformFnParams): string[] => {
  return params.value.split(',');
};
