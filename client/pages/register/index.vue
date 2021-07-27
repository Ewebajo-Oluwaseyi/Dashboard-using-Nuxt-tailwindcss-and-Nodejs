<template>
  <div>
    <register/>
  </div>
</template>

<script>
import register from '@/components/auth/register'
export default {
  layout: 'auth',
  components: {
    register
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
