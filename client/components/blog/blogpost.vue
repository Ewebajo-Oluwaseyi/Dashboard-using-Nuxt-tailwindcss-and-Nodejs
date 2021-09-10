<template>
  <div>
    <section class="w-full pt-10 w-1/2 px-6">
    <div v-if="loading">
      <loader/>
    </div>
    <div class="bg-white" v-else>
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
                @click="toggleModal(blog)"
                class="modal-open px-2 py-2 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-2 rounded"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <editblog :editableblog="editableblog" />
  </section>
  </div>
</template>

<script>
import loader from '@/components/loader/loader'
import moment from 'moment'
import editblog from './editblogpost'
import swal from 'sweetalert'
export default {
  components: {
    loader,
    editblog
  },
  filters: {
    moment: function(date) {
      return moment(date).format('MMMM Do YYYY')
    }
  },
   data() {
    return {
      loading: false,
      blogs: [],
      editableblog: {}
    }
  },
  methods: {
    async getBlog() {
      this.loading = true
      try {
        let res = await this.$axios.get('/api/blog');
        this.blogs = res.data
        this.loading = false
      } catch (err) {
        this.loading = false
        console.log(err)
      }
    },
    deleteBlog(id) {
      this.$axios.delete(`/api/blog/${id}`)
      this.getBlog()
    },
    toggleModal(blog) {
    this.editableblog = blog
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    modal.classList.toggle('opacity-0');
    modal.classList.toggle('pointer-events-none');
    body.classList.toggle('modal-active')
  }
  },
  created() {
    this.getBlog()
  }
}
</script>