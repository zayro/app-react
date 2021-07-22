import * as SecureStorage from "secure-web-storage"
import * as CryptoJS from "crypto-js"

var SECRET_KEY = "my secret key"

export class LocalService {
  //secureStorage = "demo"
  constructor() {
    this.secureStorage = new SecureStorage(localStorage, {
      hash: function hash(key) {
        key = CryptoJS.SHA256(key, SECRET_KEY)

        return key.toString()
      },
      encrypt: function encrypt(data) {
        data = CryptoJS.AES.encrypt(data, SECRET_KEY)

        data = data.toString()

        return data
      },
      decrypt: function decrypt(data) {
        data = CryptoJS.AES.decrypt(data, SECRET_KEY)

        data = data.toString(CryptoJS.enc.Utf8)

        return data
      },
    })
  }

  // Set the json data to local
  setJsonValueDefaul(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  getJsonValueDefault(key) {
    return JSON.parse(localStorage.getItem(key))
  }
  // Set the json data to local
  setJsonValue(key, value) {
    this.secureStorage.setItem(key, value)
  }
  // Get the json value from local
  getJsonValue(key) {
    return this.secureStorage.getItem(key)
  } // Clear the local
  clearToken() {
    return this.secureStorage.clear()
  }
}

export default LocalService
