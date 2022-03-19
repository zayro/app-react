import JwtService from '../services/jwt'
const jwtValidate = new JwtService()
class authGuard {
  // let isAuthenticated = false;

  constructor () {
    // console.log("jwtValidate.isTokenExpired()", jwtValidate.isTokenExpired())
    console.log('ingreso al constructor authGuard ')
    this.tokenDecode = jwtValidate.getTokenDecode()
    this.tokenValid = jwtValidate.isTokenExpired()
  }

  authenticate () {
    this.isAuthenticated = true
  }

  signOut () {
    console.log('%c Close Sesion', 'color: red; font-size: 14px')
    this.isAuthenticated = false
    // localStorage.clear()
    // sessionStorage.clear()
  }

  getAuth () {
    if (jwtValidate.isTokenExpired()) {
      return true
    } else {
      this.signOut()
      return false
    }
  }
}

export default authGuard
