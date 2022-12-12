import { PaintingResponseDto } from './painting.dto';

export class PaintingFeedResponseDto {
  feeds: Partial<Record<string, PaintingResponseDto[]>>;
  cycleInfo: {
    incrementId: number
    seed: string;
    startsAt: string;
    endsAt: string;
  };
}
