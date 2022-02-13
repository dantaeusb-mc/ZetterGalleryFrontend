import { CrossAuthRequestQueryDto } from '@/apps/api/src/dto/request/auth/cross-auth-request.query.dto';
import { RolesEnum, RoleValues } from '@app/auth/const/roles.enum';
import { IsEnum, IsOptional } from 'class-validator';

export class TokenQueryDto extends CrossAuthRequestQueryDto {
  @IsEnum(RoleValues)
  @IsOptional()
  crossAuthorizationRole: RolesEnum;
}
