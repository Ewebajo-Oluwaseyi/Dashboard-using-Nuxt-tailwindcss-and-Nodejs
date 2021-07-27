<template>
  <section class="w-full w-1/2 px-6 mb-4">
    <div v-if="loading">
      <loader/>
    </div>
    <div class="bg-white mt-4" v-else>
      <table class="table-auto w-full boarder-collapse">
        <thead class="bg-gray-300">
          <tr>
            <th class="px-4 py-2">Id</th>
            <th class="px-4 py-2">Date Posted</th>
            <th class="px-4 py-2">Title</th>
            <th class="px-4 py-2">Tags</th>
            <th class="px-4 py-2">Category</th>
            <th class="px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(blog, index) in blogs" :key="index">
            <td class="border px-4 py-2">{{parseInt(index + 1)}}</td>
            <td class="border px-4 py-2">{{blog.date | moment}}</td>
            <td class="border px-4 py-2">{{blog.title}}</td>
            <td class="border px-4 py-2">{{blog.tags}}</td>
            <td class="border px-4 py-2">{{blog.category}}</td>
            <td class="border px-4 py-2">
              <button
                @click="deleteBlog(blog._id)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
              >
                Delete
              </button>
              <router-link
                :to="'/blog/'+blog._id"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
              >
                View
              </router-link>
              <button
                class="modal-open bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-2 rounded"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import loader from '@/components/loader/loader'
import moment from 'moment'
import swal from 'sweetalert'
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
      blogs: []
    }
  },
  methods: {
    async getBlog() {
      this.loading = true
      try {
        let res = await this.$axios.get('/api/blog');
        this.blogs = res.data
        this.loading = false
        console.log(this.blogs)
      } catch (err) {
        this.loading = false
        console.log(err)
      }
    },
    deleteBlog(id) {
      this.$axios.delete(`/api/blog/${id}`)
      this.getBlog()
    }
  },
  created() {
    this.getBlog()
  }
}
</script>