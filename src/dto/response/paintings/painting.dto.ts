export class PaintingResponseDto {
  uuid: string;
  name: string;
  resolution: number;
  sizeH: number;
  sizeW: number;
  color?: string;
  favorite?: boolean;
  favorites?: number;
  statistics?: {
    score: number;
    verified: {
      impressions: number;
      salesTotal: number;
      salesCount: number;
    };
    total: {
      impressions: number;
      salesTotal: number;
      salesCount: number;
    }
  };
  author: {
    uuid: string;
    nickname: string;
  };
}
