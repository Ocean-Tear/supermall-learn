import {request} from '@/network/request';

export function getDetail(iid) {
  return request({
    url: './detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(iteminfo, columns, services) {
    this.title = iteminfo.title
    this.desc = iteminfo.desc
    this.newPrice = iteminfo.price
    this.oldPrice = iteminfo.oldPrice
    this.discount = iteminfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = iteminfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goods = shopInfo.cGoods
  }
}