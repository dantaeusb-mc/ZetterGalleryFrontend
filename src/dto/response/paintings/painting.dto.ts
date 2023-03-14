import { PaintingRatingResponseDto } from "@/dto/response/paintings/ratings.dto";
import { PaintingStatisticsResponseDto } from "@/dto/response/paintings/statistics.dto";

export class PaintingResponseDto {
  uuid: string;
  name: string;
  resolution: number;
  sizeH: number;
  sizeW: number;
  color?: string;
  favorite?: boolean;
  favorites?: number;
  ratings?: PaintingRatingResponseDto[];
  statistics?:PaintingStatisticsResponseDto;
  author: {
    uuid: string;
    nickname: string;
  };
}
