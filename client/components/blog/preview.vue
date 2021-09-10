<template>
  <div>
    <section class="w-full pt-5 w-1/2 px-6 mb-4">
    <div v-if="loading">
      <loader/>
    </div>
    <div class="bg-white mt-4" v-else>
        <div class="container text-left p-10" v-if="blog">
            <div class="bg-gray-300">
                <img
                    class="object-cover cover-photo h-64 w-full p-5"
                    alt
                />
            </div>
            <h1 class="text-left text-3xl my-8">
                {{blog.title}}
            </h1>
            <h6>
                <span class="text-lg">Category</span>
                {{blog.category}}
            </h6>
            <h6 class="mb-5">
                <span class="text-lg">Date Posted</span>
                {{blog.date | moment}}
            </h6>
            <p v-html="blog.content" class="content text-justify text-gray-800"></p>
        </div>
    </div>
  </section>
  </div>
</template>

<script>
import loader from '@/components/loader/loader'
import moment from 'moment'
export default {
  components: {
    loader
  },
  filters: {
    moment: function(date) {
      return moment(date).format('MMMM Do YYYY')
    }
  },
   data() {
    return {
      loading: false,
      blog: null
    }
  },
  methods: {
    async getBlogDetails(id) {
      this.loading = true
      try {
        let res = await this.$axios.get(`/api/blog/${id}`);
        this.blog = res.data
        this.loading = false
        console.log(this.blog)
      } catch (err) {
        this.loading = false
        console.log(err)
      }
    }
  },
  created() {
    this.getBlogDetails(this.$route.params.id)
  }
}
</script>
<style scoped>
.content {
    line-height: 2.25rem;
}
</style>