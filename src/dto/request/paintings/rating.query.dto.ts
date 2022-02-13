import { IsEnum } from 'class-validator';
import { PaintingRatingEnum } from '@app/painting/const/painting-rating.enum';
import { Transform } from 'class-transformer';
import { csvToArray } from '../../utils/csv-to-array';

export class PaintingRatingQueryDto {
  @Transform(csvToArray)
  @IsEnum(PaintingRatingEnum, { each: true })
  ratings?: PaintingRatingEnum[];
}
