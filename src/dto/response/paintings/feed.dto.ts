import { PaintingResponseDto } from './painting.dto';

export class PaintingFeedResponseDto {
  feeds: Partial<Record<string, PaintingResponseDto[]>>;
  cycleInfo: {
    seed: string;
    startsAt: string;
    endsAt: string;
  };
}
