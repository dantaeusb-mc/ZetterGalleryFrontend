import { IsBase64, IsEnum, IsIn, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { resolutionTransformer } from '../../utils/resolution-transformer';
import { PaintingResolution } from '@app/painting/const/resolution.enum';

export class PaintingBodyDto {
  @IsString()
  name: string;

  @Transform(resolutionTransformer)
  @IsEnum(PaintingResolution)
  resolution?: PaintingResolution = PaintingResolution.x16;

  @IsIn([1, 2, 3, 4])
  @Type(() => Number)
  sizeH: number;

  @IsIn([1, 2, 3, 4])
  @Type(() => Number)
  sizeW: number;

  @IsBase64()
  color: string;
}
