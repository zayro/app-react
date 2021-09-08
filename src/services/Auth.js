import JwtService from "../services/jwt"
const jwtValidate = new JwtService()
class authGuard {
  //  let isAuthenticated = false;

  constructor() {
    //console.log("jwtValidate.isTokenExpired()", jwtValidate.isTokenExpired())
    console.log("ingreso al constructor authGuard ")
    console.log(
      `:rocket: ~ file: Auth.js ~ line 12 ~ authGuard ~ constructor ~ jwtValidate.isTokenExpired()`,
      jwtValidate.isTokenExpired()
    )
    this.tokenDecode = jwtValidate.getTokenDecode()
  }

  authenticate() {
    this.isAuthenticated = true
  }

  signout() {
    console.log("%c Close Sesion", "color: red; font-size: 14px")
    this.isAuthenticated = false
    localStorage.clear()
    sessionStorage.clear()
  }

  getAuth() {
    if (jwtValidate.isTokenExpired()) {
      console.log("Sesion Auth")
      return true
    } else {
      this.signout()
      return false
    }
  }
}

export default authGuard
