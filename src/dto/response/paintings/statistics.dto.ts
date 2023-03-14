export class PaintingStatisticsResponseDto {
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
  };
}