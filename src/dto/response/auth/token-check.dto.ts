import { TokenResponseDto } from '@/apps/api/src/dto/response/auth/token.dto';

export class TokenCheckResponseDto extends TokenResponseDto {
  role: string;
  playerUuid: string;
  playerRights: {
    canBuy: boolean;
    canSell: boolean;
  };
}
