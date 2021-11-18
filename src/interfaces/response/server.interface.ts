export interface IPaintingInfo {
  uuid: string,
  name: string,
  author: string,
  color: string, // base64
  sizeH: number,
  sizeW: number,
  resolution: string
}

export interface ISalePaintingInfo extends IPaintingInfo {
  price: number
}

export interface IPaintingsList {
  seed: string, // current seed which is updated every 5 minutes, used by server to combine feeds based on merchant level
  sell: {
    allowed: boolean,
    price: number,
    message?: string
  },
  feeds: {
    popular: IPaintingInfo[],
    new: IPaintingInfo[],
    hot: IPaintingInfo[],
    personal?: IPaintingInfo[]
  }
}
