import { TransformFnParams } from 'class-transformer';
import { PaintingResolution } from '@app/painting/const/resolution.enum';

export const resolutionTransformer = (
  params: TransformFnParams,
): PaintingResolution => {
  const normalizedResolution = params.value / 16;

  if (!Number.isInteger(normalizedResolution)) {
    return null;
  }

  if (![1, 2, 4].includes(normalizedResolution)) {
    return null;
  }

  return normalizedResolution;
};