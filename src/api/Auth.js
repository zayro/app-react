// Load Services
import http from '../services/http'

const loginService = async ({ datos }) => {
  return await http.request({
    method: 'post',
    url: '/login',
    data: datos,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export { loginService }
