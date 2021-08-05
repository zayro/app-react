import JwtService from "../services/jwt"

class authGuard {
  //  let isAuthenticated = false;

  constructor(isAuthenticated = false) {
    const jwtValidate = new JwtService()

    if (jwtValidate.isTokenExpired()) {
      this.isAuthenticated = true
    } else {
      this.isAuthenticated = isAuthenticated
    }
  }

  authenticate() {
    this.isAuthenticated = true
  }

  signout() {
    this.isAuthenticated = false
    sessionStorage.clear()
  }
  getAuth() {
    return this.isAuthenticated
  }
}

export default authGuard
