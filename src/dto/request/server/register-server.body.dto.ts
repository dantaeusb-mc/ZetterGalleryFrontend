import { IsBoolean, IsString } from 'class-validator';

export class RegisterServerBodyDto {
  @IsBoolean()
  singleplayer: boolean;

  @IsString()
  title: string;

  @IsString()
  motd: string;
}
