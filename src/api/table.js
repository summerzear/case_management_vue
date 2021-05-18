import request from '@/utils/request'
var host = 'http://172.17.16.142:5000'

export function addCase(data) {
  return request({
    baseURL: host,
    url: '/add',
    method: 'post',
    data
  })
}
