import { IsEnum, IsOptional } from 'class-validator';
import { RolesEnum, RoleValues } from '@app/auth/const/roles.enum';

export class CrossAuthRequestQueryDto {
  @IsEnum(RoleValues)
  @IsOptional()
  role?: RolesEnum;
}