import { TokenResponseDto } from './token.dto';
import { ActionResponseDto } from '@/dto/response/action.dto';

export interface TokenStatusResponseDto extends TokenResponseDto {
  playerUuid: string;
  playerRights: {
    canBuy: boolean;
    canSell: boolean;
  };
  role: string;
  state?: ActionResponseDto; // @todo: what?
}