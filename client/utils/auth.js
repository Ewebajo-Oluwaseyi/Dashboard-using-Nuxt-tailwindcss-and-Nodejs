import Vue from 'vue'
import VueJwtDecode from 'vue-jwt-decode'

export default {
  userIsLogged() {
    if (process.browser) {
      let token = localStorage.getItem('jwt')
      if (token) {
        let parseToken = VueJwtDecode.decode(token)

        if (parseToken.exp > Date.now() / 1000) {
          return true
        } else {
          this.deleteToken()
          return false
        }
      } else {
        return false
      }
    }

    return false
  },

  getToken() {
    return localStorage.getItem('jwt')
  },

  storeToken(token) {
    localStorage.setItem('jwt', token)
  },

  deleteToken() {
    localStorage.removeItem('jwt')
  },

  logoutUser() {
    this.deleteToken()
  },

  loginUser(token) {
    this.storeToken(token)
  }
}
