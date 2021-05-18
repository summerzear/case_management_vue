import request from '@/utils/request'

var host = 'http://172.17.16.142:5000'
export function login(data) {
  return request({
    baseURL: host,
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    baseURL: host,
    url: '/user/info',
    method: 'get',
    // params: { token }
  })
}

export function logout() {
  return request({
    baseURL: host,
    url: '/user/logout',
    method: 'get'
  })
}
