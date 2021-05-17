<template>
    <div>
      <div class="xl:py-10 sidebar-layout">
          <div class="group relative sidebar-item with-children">
              <nuxt-link to="/dashboard"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-800"
              >
              <i class="mdi mdi-home text-white text-xl px-2"></i>
              <div class="text-white text-base text-xl">Home</div>
              </nuxt-link>
          </div>
          <div class="group relative sidebar-item with-children mt-2">
              <nuxt-link to="#"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-800"
              >
              <i class="mdi mdi-home text-white text-xl px-2"></i>
              <div class="text-white text-base text-xl">Blog</div>
              </nuxt-link>
          </div>
          <div class="group relative sidebar-item with-children mt-2">
              <nuxt-link to="#"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-800"
              >
              <i class="mdi mdi-home text-white text-xl px-2"></i>
              <div class="text-white text-base text-xl">Users</div>
              </nuxt-link>
          </div>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.sidebar-layout {
    position: fixed;
    overflow-y: auto;
}
@media (max-width: 375px) {
    .sidebar-layout {
        position: fixed;
        overflow-y: auto;
    }
}
@media (max-width: 639px) {
    .sidebar-layout {
        position: fixed;
        overflow-y: auto;
    }
}
@media (max-width: 768px) {
    .sidebar-layout {
        position: fixed;
        overflow-y: auto;
    }
}
</style>