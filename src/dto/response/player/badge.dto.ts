import { BadgeCategory, BadgeTier } from '@/const/badges';

export class PlayerBadgeResponseDto {
  code: string;
  category: BadgeCategory;
  tier: BadgeTier;
  name: string;
  description: string;
}