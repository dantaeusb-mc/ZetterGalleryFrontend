import { TokenResponseDto } from './token.dto';
import { RolesEnum } from '@app/auth/const/roles.enum';
import { ActionResponseDto } from '@/apps/api/src/dto/response/action.dto';

export interface TokenStatusResponseDto extends TokenResponseDto {
  playerUuid: string;
  playerRights: {
    canBuy: boolean;
    canSell: boolean;
  };
  role: RolesEnum;
  state?: ActionResponseDto; // @todo: what?
}