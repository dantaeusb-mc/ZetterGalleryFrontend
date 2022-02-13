import { TransformFnParams } from 'class-transformer';

export const stringToBoolean = (params: TransformFnParams): boolean => {
  if (['true', 'false'].includes(params.value)) {
    return params.value === 'true';
  }

  return params.value;
};