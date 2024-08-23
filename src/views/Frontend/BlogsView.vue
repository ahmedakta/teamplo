<template>
  <MainLayout>
    <!-- Blog filter section -->
    <section class="container mx-auto py-40 text-black">
      <h2 class="text-2xl text-center mb-8 text-black font-semibold">
        <span class="text-[#3AA9D0] font-semibold">Teamplo</span> Blogs
      </h2>
      <div class="flex">
        <!-- Filter 1  -->
        <div class="flex px-4">
          <img src="@/assets/icons/menu.svg" alt="" />
          <p>Category: Software</p>
        </div>
        <div class="flex px-4">
          <img src="@/assets/icons/sort.svg" alt="" />
          <p>Sort: Most Read</p>
        </div>
      </div>
      <Blogs v-if="data.contents" :blogs="data.contents.data" header="" />
    </section>
    <!-- Blogs List Section -->
  </MainLayout>
  <!-- Header Section -->
</template>
<script setup>
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
import Blogs from '@/components/Frontend/Blogs.vue'
const data = ref([])
onMounted(() => {
  try {
    // TODO : this logic loadng data twice
    generalStore.makeRequest('/api/blogs').then(() => {
      // custimize values for datatable library
      if (generalStore.data) {
        data.value = generalStore.data
        generalStore.isLoading = false
      } else {
        console.log('something going wrong with endpoint data')
      }
    })
  } catch (error) {
    console.log(error)
  }
})
</script>
