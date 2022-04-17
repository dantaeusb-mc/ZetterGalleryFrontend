import { CrossAuthCodeResponseDto } from './cross-auth-code.dto';

export class TokenResponseDto {
  token: string;
  issued: string;
  notAfter: string;
  type: string;
  crossAuthorizationCode?: CrossAuthCodeResponseDto;
}
