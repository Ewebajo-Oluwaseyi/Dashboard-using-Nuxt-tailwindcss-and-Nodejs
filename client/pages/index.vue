<template>
  <div>
    <login />
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
