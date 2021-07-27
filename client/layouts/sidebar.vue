<template>
    <div>
      <div class="xl:py-10 sidebar-layout">
          <div class="group relative sidebar-item with-children">
              <nuxt-link to="/dashboard"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent"
              >
              <i class="mdi mdi-home text-white px-2"></i>
              <div class="text-white text-xs xl:text-sm">Home</div>
              </nuxt-link>
          </div>
          <div class="group relative sidebar-item with-children mt-2">
              <nuxt-link to="/blog"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent"
              >
              <i class="mdi mdi-format-align-justify text-white px-2"></i>
              <div class="text-white text-xs xl:text-sm">Blog</div>
              </nuxt-link>
          </div>
          <div class="group relative sidebar-item with-children mt-2">
              <nuxt-link to="/addblog"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent"
              >
              <i class="mdi mdi-plus text-white px-2"></i>
              <div class="text-white text-xs xl:text-sm">Add Blog</div>
              </nuxt-link>
          </div>
          <div class="group relative sidebar-item with-children mt-2">
              <nuxt-link to="#"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent"
              >
              <i class="mdi mdi-account mdi-38px text-white px-2"></i>
              <div class="text-white text-xs xl:text-sm">Users</div>
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