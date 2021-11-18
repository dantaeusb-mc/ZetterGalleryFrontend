export interface IAuthMicrosoftStartResponse {
  redirect: string
}

export interface ITokenStatusResponse {
  playerUuid: string,
  playerRights: {
    canBuy: boolean,
    canSell: boolean
  },
  role: string,
  issued: string,
  notAfter: string,
  type: string
}

export interface ICrossAuthorizationCodeResponse {
  code: string,
  issued: string,
  notAfter: string
}

export interface ITokenResponse {
  token: string,
  issued: string,
  notAfter: string,
  type: string,
  crossAuthorizationCode?: ICrossAuthorizationCodeResponse
}
