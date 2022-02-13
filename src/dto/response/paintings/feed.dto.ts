import { PaintingResponseDto } from './painting.dto';
import { FeedTypeEnum } from '@app/feed/const/feed-type.enum';

export class PaintingFeedResponseDto {
  feeds: Partial<Record<FeedTypeEnum, PaintingResponseDto[]>>;
  cycleInfo: {
    seed: string;
    startsAt: string;
    endsAt: string;
  };
}
