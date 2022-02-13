import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { stringToBoolean } from '../../utils/string-to-boolean';

export class PaintingQueryDto {
  // We can't use IsBooleanString because Transform is always executed first and
  // IsBooleanString doesn't change type to boolean
  @Transform(stringToBoolean)
  @IsBoolean()
  @IsOptional()
  withRawData?: boolean;

  @Transform(stringToBoolean)
  @IsBoolean()
  @IsOptional()
  withStatistics?: boolean;
}
