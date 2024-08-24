<template>
  <MainLayout>
    <!-- Blog View -->
    <section class="container mx-auto py-32 p-5 text-black" v-if="generalStore.data">
      <header class="flex justify-between">
        <h1 class="text-xl font-bold mb-10">{{ generalStore.data.content_title }}</h1>
        <a href="#">
          <font-awesome-icon :icon="['fa-regular', 'heart']" />
          32
        </a>
      </header>
      <!-- Blog Image -->
      <img
        class="w-full h-full object-cover"
        :src="
          generalStore.data.content_image
            ? `${generalStore.dir}/blogs/${generalStore.data.content_image}`
            : `${generalStore.dir}/blogs/default-blog.png`
        "
        alt="Blog Image"
      />
      <!-- Suthor Section -->
      <div class="flex justify-between mt-10">
        <div class="flex">
          <img :src="`${generalStore.dir}/default_profile_image.png`" class="mr-5" alt="" />
          <p class="mt-3" v-if="generalStore.data.user">{{ generalStore.data.user.name }}</p>
        </div>
        <font-awesome-icon
          @click="generalStore.openModal('shareModal')"
          class="py-2 px-2 bg-[#3AA9D0] rounded-xl text-white text-xl"
          :icon="['fa', 'share-nodes']"
        />
      </div>
      <!-- Page Content Section  -->
      <div class="container mx-auto mt-10" v-html="generalStore.data.content_body"></div>
      <!-- Tags -->
      <div class="flex space-x-2 py-10">
        <span class="bg-gray-200 text-black px-3 py-1 rounded-full">AI</span>
        <span class="bg-gray-200 text-black px-3 py-1 rounded-full">Company Managment</span>
        <span class="bg-gray-200 text-black px-3 py-1 rounded-full">Task Managment</span>
      </div>
    </section>
    <!-- Maybe you Like section -->
    <section class="container mx-auto">
      <Blogs :blogs="blogs" header="Maybe You Like" />
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
import Blogs from '@/components/Frontend/Blogs.vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let blogUrl = `/api/blogs/${route.params.slug}`
const data = ref([])

onMounted(() => {
  try {
    generalStore.makeRequest(blogUrl)
  } catch (error) {
    console.log(error)
  }
})

const blogs = ref([
  {
    id: 1,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog1.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  },
  {
    id: 2,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog2.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  },
  {
    id: 3,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog3.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  },
  {
    id: 4,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: '/src/assets/blogs/blog4.png',
    created_at: '27 APRIL 2024',
    reading_time: '10 min'
  }
])
</script>
