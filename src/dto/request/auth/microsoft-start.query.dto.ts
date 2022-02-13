import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { MicrosoftAuthCallbackType } from '@app/auth/const/microsoft-auth-callback-type.enum';

export class AuthMicrosoftStartQueryDto {
  @IsString({ message: 'Invalid state' })
  @IsOptional()
  redirect: string;

  @IsEnum(MicrosoftAuthCallbackType)
  @IsOptional()
  callbackTarget: MicrosoftAuthCallbackType;
}

export class MicrosoftAuthCallbackDto {
  @IsString({ message: 'Invalid authentication token' })
  @IsNotEmpty({ message: 'Missing authentication token' })
  @Length(36, 46, { message: 'Invalid authentication token' })
  code: string

  @IsEnum(MicrosoftAuthCallbackType)
  @IsOptional()
  callbackTarget: MicrosoftAuthCallbackType;

  @IsString({ message: 'Invalid state' })
  @IsOptional()
  state: string;
}
