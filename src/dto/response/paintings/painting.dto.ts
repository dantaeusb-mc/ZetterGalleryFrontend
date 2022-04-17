export class PaintingResponseDto {
  uuid: string;
  name: string;
  resolution: number;
  sizeH: number;
  sizeW: number;
  color?: string;
  statistics?: {
    favorites: number;
    salesTotal: string;
    salesCount: number;
  };
  author: {
    uuid: string;
    nickname: string;
  };
}
