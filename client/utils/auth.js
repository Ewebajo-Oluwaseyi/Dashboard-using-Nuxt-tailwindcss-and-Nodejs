import Vue from 'vue'
import VueJwtDecode from 'vue-jwt-decode';

export default {
    LoggedIn() {
        if(process.browser) {
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
        } return false
    },

    deleteToken() {
        localStorage.removeItem('jwt')
    },

    logout() {
        this.deleteToken()
    }
}