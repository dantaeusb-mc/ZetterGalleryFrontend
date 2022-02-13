import { IsOptional, IsString } from 'class-validator';

export class TokenCheckQueryDto {
  @IsString()
  @IsOptional()
  state: string;
}
