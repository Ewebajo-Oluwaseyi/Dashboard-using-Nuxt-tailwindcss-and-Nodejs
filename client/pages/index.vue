<template>
  <div>
    <login/>
  </div>
</template>

<script>
import login from '@/components/auth/login'
export default {
  layout: 'auth',
  components: {
    login
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
