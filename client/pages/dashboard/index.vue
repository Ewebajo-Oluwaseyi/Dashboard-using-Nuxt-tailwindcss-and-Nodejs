<template>
  <div class="container">
    <matrics />

    <div class="flex flex-row flex-wrap flex-grow mt-2 px-6">
      <barchart />
      <linechart />
    </div>
  </div>
</template>

<script>
import matrics from '@/components/home/matrics'
import barchart from '@/components/home/barchart'
import linechart from '@/components/home/linechart'
export default {
  components: {
    matrics,
    barchart,
    linechart
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
