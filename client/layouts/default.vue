<template>
  <div>
    <div class="wrapper">
      <nav-bar />

      <div id="main">
        <div class="bg-midnightblue-500 relative pt-16 h-full min-h-screen">
          <div class="xl:py-5 ">
            <side-bar />
          </div>
        </div>
        <div class="h-full pt-16">
          <div class="text-center bg-gray-200 h-full w-full text-grey-darkest">
            <nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import auth from '../utils/auth'
import navbar from '@/layouts/navbar'
import sidebar from '@/layouts/sidebar'
export default {
  components: {
    'nav-bar': navbar,
    'side-bar': sidebar
  },

  created() {
    if (!auth.userIsLogged()) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
*{
  font-family: 'Muli', sans-serif;
}

#main {
  display: grid;
  grid-template-columns: 4rem auto;
}
a {
  text-decoration: none;
}

.pt-16 {
  padding-top: 4rem;
}

@media (min-width: 1200px) {
    #main {
      grid-template-columns: 15rem auto;
    }
    .xl:pin-none{
      left: auto;
    }
}
.top-full {
  top: 100%;
}

.left-full {
  left: 100%;
}

.bg-midnightblue-500 {
  background: #14233b;
}
</style>
