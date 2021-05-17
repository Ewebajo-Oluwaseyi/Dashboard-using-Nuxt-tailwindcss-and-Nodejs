<template>
  <div>
    <div class="wrapper">
      <navbar/>

      <div id="main">
        <div class="bg-midnightblue-500 relative pt-16 h-full min-h-screen">
          <div class="xl:py-5">
            <sidebar/>
          </div>
        </div>
        <div class="h-full pt-16">
          <div class="text-center bg-gray-200 h-full w-full text-gray-darkest">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from '@/layouts/navbar'
import sidebar from '@/layouts/sidebar'
export default {
  components: {
    navbar,
    sidebar
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
  grid-template-columns: 6rem auto;
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
