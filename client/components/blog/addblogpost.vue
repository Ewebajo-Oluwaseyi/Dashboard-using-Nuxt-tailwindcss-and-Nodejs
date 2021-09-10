<template>
  <section class="mx-4 sm:mr-8 lg:mx-10 pt-10">
    <form class="w-full bg-white px-2 lg:px-32 pt-10 md:px-10" @submit.prevent="addNewBlog">
      <h1 class="text-left text-xl mb-6">Add Blog</h1>
      <div class="flex flex-wrap -mx-3 mb-3 md:mb-2">
        <div class="w-1/2 lg:w-1/2 sm:w-full xm px-3 mb-3 md-mb-0">
          <label class="block uppercase text-left text-gray-700 text-xs font-bold mb-2"
          for="post-blog">
            Post Title
          </label>
          <input
            class="appearance-none block w-full bg-grey-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="post-blog"
            type="text"
            placeholder=""
            v-model="data.title"
          />
        </div>

        <div class="w-1/4 lg:w-1/4 sm:w-full xm px-3 mb-3 md-mb-0">
          <label class="block uppercase text-left text-gray-700 text-xs font-bold mb-2"
          for="post-blog-image">
            Upload Image
          </label>
          <input
            class="appearance-none block w-full bg-grey-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="post-blog-image"
            type="file"
            accept="image/*"
            ref="file"
            @change="handleFileUpload"
            placeholder=""
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-3 md:mb-2">
        <div class="w-1/2 lg:w-1/2 sm:w-full xm px-3 mb-3 md-mb-0">
          <label class="block uppercase text-left text-gray-700 text-xs font-bold mb-2"
          for="post-blog-tags">
            Tags
          </label>
          <input
            class="appearance-none block w-full bg-grey-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="post-blog-tag"
            type="text"
            v-model="data.tags"
            placeholder=""
          />
        </div>
         <div class="w-full lg:w-1/2 md:w-full xm px-3 mb-3 md-mb-0">
          <label class="block uppercase text-left text-gray-700 text-xs font-bold mb-2"
          for="post-blog-category">
            Category
          </label>
          <select
            v-model="data.category"
            class="form-select appearance-none block w-full bg-grey-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="post-blog-category"
          >
          <option disabled :value="null">Select an Options</option>
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category.category"
          >{{category.category}}</option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-3 mb-3 md:mb-0">
          <label class="block uppercase text-left text-gray-700 text-xs font-bold mb-2"
          for="post-blog-content">
            Content
          </label>
          <ckeditor id="editor" v-model="data.content" :editor="editor" :config="editorConfig"></ckeditor>
        </div>
        <div class="flex flex-wrap -mx-3 mb-3 mt-5 ml-1">
          <div class="w-full px-3 mb-g md:mb-0">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Post
            </button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>
<script>
let ClassicEditor
if (process.client) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
}
import swal from 'sweetalert'
export default {
  data() {
    return {
      data: {
        title: '',
        tags: [],
        category: '',
        image: '',
        content: ''
      },
      categories: [
        {
          "id": 1,
          "category": "music"
        },
        {
          "id": 2,
          "category": "lifestyle"
        },
        {
          "id": 3,
          "category": "sport"
        }
        ],
      editor: ClassicEditor,
      editorConfig: {}
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.data.image = file
      console.log(this.data.image)
    },
    async addNewBlog() {
      let config = {
            headers: {
                'Content-Type': 'application/json'
            }
      }
      try {
        let title = this.data.title
        let category = this.data.category
        let tags = this.data.tags
        let content = this.data.content
        let image = this.data.image
        let response = await this.$axios.post('/api/blog', {title, tags, category, content}, config);
        const files = new FormData()
        files.append('image', image, image.name)
        let res = await this.$axios.post('/api/upload', files, config);
        console.log(res)
        swal('Success', 'Blog Posted', 'sucess')

        this.data = {}
      } catch (err) {
        swal('Error', 'Error posting blog', 'error')
        console.log(err)
      }
    }
  }
}
</script>
<style>
.ck-editor__editable_inline {
  min-height: 200px;
}
</style>