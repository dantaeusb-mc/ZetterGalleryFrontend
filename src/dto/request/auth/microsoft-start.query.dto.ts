export class AuthMicrosoftStartQueryDto {
  redirect: string;
  callbackTarget: string;
}

export class MicrosoftAuthCallbackDto {
  code: string;
  callbackTarget: string;
  state: string;
}
