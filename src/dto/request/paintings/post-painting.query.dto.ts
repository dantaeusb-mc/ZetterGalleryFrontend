import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { stringToBoolean } from '../../utils/string-to-boolean';

export class PaintingPostQueryDto {
  /**
   * If set to false, we are not saving the painting, just validating
   */
  @Transform(stringToBoolean)
  @IsBoolean()
  @IsOptional()
  save?: boolean = true;
}
