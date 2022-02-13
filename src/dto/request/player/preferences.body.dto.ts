import { IsBoolean, IsEnum } from 'class-validator';
import { PaintingRatingEnum } from '@app/painting/const/painting-rating.enum';

export class PlayerPreferencesBodyDto {
  @IsBoolean()
  isProfilePublic: boolean;

  @IsEnum(PaintingRatingEnum, { each: true })
  ratings?: PaintingRatingEnum[];
}
