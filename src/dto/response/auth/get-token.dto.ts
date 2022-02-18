import { CrossAuthCodeResponseDto } from './cross-auth-code.dto';
import { TokenResponseDto } from './token.dto';

export class GetTokenResponseDto extends TokenResponseDto {
  crossAuthorizationCode?: CrossAuthCodeResponseDto;
}
