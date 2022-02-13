import { TokenResponseDto } from '../auth/token.dto';

export class ServerResponseDto {
  ip: string;
  title: string;
  motd: string;

  token?: TokenResponseDto;
}