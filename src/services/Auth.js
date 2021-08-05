import JwtService from "../services/jwt"

class authGuard {
  //  let isAuthenticated = false;

  constructor(isAuthenticated = false) {
    const jwtValidate = new JwtService()

    //console.log("jwtValidate.isTokenExpired()", jwtValidate.isTokenExpired())

    if (jwtValidate.isTokenExpired()) {
      this.isAuthenticated = true
    } else {
      this.isAuthenticated = isAuthenticated
    }
  }

  authenticate() {
    this.isAuthenticated = true
  }

  static signout() {
    console.log("Close Sesion")
    this.isAuthenticated = false
    localStorage.clear()
    sessionStorage.clear()
  }

  getAuth() {
    return this.isAuthenticated
  }
}

export default authGuard
