export class PlayerStatisticsResponseDto {
  paintingsCount: number;
  favoritesCount: number;
  statistics: {
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
  };
}