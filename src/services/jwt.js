import jwtDecode from 'jwt-decode'
import LocalService from '../services/secureStorage'

const instance = new LocalService()
/* var token = "eyJ0eXAiO.../// jwt token";
var decoded = jwtDecode(token);

console.log(decoded);
 */

export default class JwtService {
  /**
   * Get Token
   */
  getToken () {
    if (
      instance.getJsonValue('dataInfo') &&
      Object.prototype.hasOwnProperty.call(instance.getJsonValue('dataInfo'), 'token')
    ) {
      const dataInfo = instance.getJsonValue('dataInfo')
      return dataInfo.token === '' ? null : dataInfo.token
    } else {
      return null
    }
  }

  getTokenDecode () {
    if (this.getToken() === null) {
      return false
    }
    return jwtDecode(this.getToken())
  }

  /**
   * Save Token
   */
  setToken (info) {
    // localStorage.setItem("token", token)
    const dataInfo = instance.getJsonValue('dataInfo')
    const token = { token: info }
    instance.setJsonValue('dataInfo', {
      ...dataInfo,
      token
    })
  }

  /**
   * Valid of Token save
   */
  getTokenExpirationDate () {
    try {
      if (this.getToken() === null) {
        return null
      } else {
        const decoded = jwtDecode(this.getToken())

        if (decoded.exp === undefined) {
          return null
        }

        const date = new Date(0)
        date.setUTCSeconds(decoded.exp)

        console.info('Token decoded :: ', decoded)
        console.info('Token decoded :: ', decoded.exp)
        console.info('Time Created Token :: ', new Date(decoded.iat * 1000).toLocaleString())
        console.info('Time Expire Token :: ', new Date(decoded.exp * 1000).toLocaleString())
        console.info('Time Actually :: ', new Date(Date.now()).toLocaleString())
        console.info('Valid :: ', date.getTime() > new Date().getTime())
        return date
      }
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * Valida el token almacenado
   */
  isTokenExpired () {
    const date = this.getTokenExpirationDate()
    if (date === null) {
      return false
    } else {
      if (date === undefined) {
        return false
      }
      return date.valueOf() > new Date().valueOf()
    }
  }
}
