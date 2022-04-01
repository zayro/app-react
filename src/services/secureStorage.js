import * as CryptoJS from 'crypto-js'
import * as SecureStorage from 'secure-web-storage'

const SECRET_KEY = 'my secret key'

export class LocalService {
  // secureStorage = "demo"
  constructor () {
    this.secureStorage = new SecureStorage(window.localStorage, {
      hash: function hash (key) {
        key = CryptoJS.SHA256(key, SECRET_KEY)

        return key.toString()
      },
      encrypt: function encrypt (data) {
        data = CryptoJS.AES.encrypt(data, SECRET_KEY)

        data = data.toString()

        return data
      },
      decrypt: function decrypt (data) {
        data = CryptoJS.AES.decrypt(data, SECRET_KEY)

        data = data.toString(CryptoJS.enc.Utf8)

        return data
      }
    })
  }

  // Set the json data to local
  setJsonValueDefault (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // Set the json data to local
  getJsonValueDefault (key) {
    return JSON.parse(window.localStorage.getItem(key))
  }

  // Get the json value from local
  setJsonValue (key, value) {
    this.secureStorage.setItem(key, value)
  }

  // Clear the local
  getJsonValue (key) {
    return this.secureStorage.getItem(key) ? this.secureStorage.getItem(key) : false
  }

  clearAll () {
    return this.secureStorage.clear()
  }

  removeItem (item) {
    this.secureStorage.removeItem(item)
  }

  // removes the entry 'data'
}

export default LocalService
