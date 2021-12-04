export interface IPaintingResponse {
  uuid: string,
  name: string,
  resolution: number,
  sizeH: number,
  sizeW: number,
  color?: string,
  statistics?: {
    favorites: number,
    salesTotal: number,
    salesCount: number
  }
  author: {
    uuid: string,
    nickname: string
  }
}
