import { CrossAuthCodeResponseDto } from '@/apps/api/src/dto/response/auth/cross-auth-code.dto';
import { TokenResponseDto } from '@/apps/api/src/dto/response/auth/token.dto';

export class GetTokenResponseDto extends TokenResponseDto {
  crossAuthorizationCode?: CrossAuthCodeResponseDto;
}
