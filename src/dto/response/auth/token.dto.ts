import { CrossAuthCodeResponseDto } from '@/apps/api/src/dto/response/auth/cross-auth-code.dto';

export class TokenResponseDto {
  token: string;
  issued: string;
  notAfter: string;
  type: string;
  crossAuthorizationCode?: CrossAuthCodeResponseDto;
}
