import { IsString } from 'class-validator';

export class CrossAuthCodeQueryDto {
  @IsString()
  crossAuthorizationCode: string;
}
