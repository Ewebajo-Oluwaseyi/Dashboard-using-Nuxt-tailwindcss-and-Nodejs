<template>
    <div id="body">
      <div class="container" id="container">
          <div class="form-container sign-in-container">
              <form v-on:submit.prevent="UserRegister">
                  <h1 class="mb-5 text-xl">Register</h1>
                  <div class="mb-4 mt-5">
                    <label
                     class="block text-gray-700 text-center text-sm font-bold mb-2">
                    Name
                    </label>
                    <input
                    class="shadow apprearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="text"
                    type="text"
                    placeholder="Name"
                    v-model="register.name"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                     class="block text-gray-700 text-center text-sm font-bold mb-2">
                    Email
                    </label>
                    <input
                    class="shadow apprearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    v-model="register.email"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                     class="block text-gray-700 text-center text-sm font-bold mb-2">
                    Password
                    </label>
                    <input
                    class="shadow apprearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="password"
                    placeholder="*****"
                    v-model="register.password"
                    />
                  </div>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Register
                  </button>
                  <div className="mt-5 text-center">
                    <p>
                    Already have an account ??
                    <NuxtLink
                    to="/"
                    className="text-primary"
                  >
                    Login now
                  </NuxtLink>
                </p>
              </div>
              </form>
          </div>
          <div class="overlay-container">
              <div class="overlay">
                  <div class="overlay-panel over-right">
                      <h1>Hello,</h1>
                      <p>Enter your login details to view your dashboard</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import auth from '../../utils/auth'
    export default {
        components: {

        },
        /*created() {
            if(auth.LoggedIn()){
               this.$router.push('/')
            }
        },*/
        data() {
            return {
                loading: false,
                userLoggedIn: false,
                register: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async UserRegister() {
                this.loading = true
                console.log(this.loading)
                try {
                    let response = await this.$axios.post('/api/users', this.register)

                    if(response.status === 200) {
                        let token = response.data.token
                        localStorage.setItem('jwt', token)
                        this.loading = false
                        this.userLoggedIn = true
                        if(this.userLoggedIn) {
                            this.$router.push('/dashboard')
                        }
                    } else {
                        this.loading = false
                    }

                } catch (err) {
                    console.log(err)
                }
                this.register = {
                    email: '',
                    password: ''
                }
            }
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
*{
    box-sizing: border-box;
}
#body {
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    margin: -20px 0 50px;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-height: 100%;
    min-height: 520px;
}
form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
}
.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}
.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}
h1 {
    font-weight: bold;
    margin: 0;
}
h2 {
    text-align: center;
}
p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}
span {
    font-size: 12px;
}
a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}
button {
    transition: transform 80ms ease-in;
}
button:active {
transform: scale(0.95);
}
button:focus {
    outline: none;
}
button.ghost {
    background-color: transparent;
    border-color: #ffffff;
}
.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
}
.overlay {
    background: #14233b;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease;
}
.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease;
}
.over-right {
    right: 0;
    transform: translateX(0);
}
</style>