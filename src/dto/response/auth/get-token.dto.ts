import { AuthCodeResponseDto } from './auth-code.dto';
import { TokenResponseDto } from './token.dto';

export class GetTokenResponseDto extends TokenResponseDto {
  crossAuthorizationCode?: AuthCodeResponseDto;
}
