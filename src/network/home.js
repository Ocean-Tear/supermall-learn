import {request} from '@/network/request.js'

export function getHomeMultidate() {
  return request({
    url : '/home/multidata'
  })
}