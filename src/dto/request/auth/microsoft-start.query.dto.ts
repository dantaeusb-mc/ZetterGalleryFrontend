export class AuthMicrosoftStartQueryDto {
  redirect: string;
}

export class MicrosoftAuthCallbackDto {
  code: string;
  state: string;
}
