import { CrossAuthRequestQueryDto } from './cross-auth-request.query.dto';

export class TokenQueryDto extends CrossAuthRequestQueryDto {
  crossAuthorizationRole: string;
}
