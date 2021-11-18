export interface IPaintingResponse {
  uuid: string,
  name: string,
  resolution: number,
  sizeH: number,
  sizeW: number,
  color?: string,
  author: {
    uuid: string,
    nickname: string
  }
}
