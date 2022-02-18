import { TokenResponseDto } from './token.dto';

export class TokenCheckResponseDto extends TokenResponseDto {
  role: string;
  playerUuid: string;
  playerRights: {
    canBuy: boolean;
    canSell: boolean;
  };
}
