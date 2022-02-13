import { PaintingRatingEnum } from '@app/painting/const/painting-rating.enum';

export class PlayerPreferencesResponseDto {
  playerUuid: string;
  isProfilePublic: boolean;
  paintingRatings: PaintingRatingEnum[];
}
