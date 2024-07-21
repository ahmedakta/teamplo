<template>
  <MainLayout> {{ data.content_title }}</MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
import { useRoute } from 'vue-router'
const route = useRoute()
const data = ref([])

onMounted(() => {
  try {
    getContent()
  } catch (error) {
    console.log(error)
  }
})

const getContent = async (filterParams = null) => {
  let url = '/api/content/' + route.params.slug
  generalStore.makeRequest(url, filterParams).then(() => {
    // custimize values for datatable library
    if (generalStore.data) {
      data.value = generalStore.data
      generalStore.isLoading = false
    } else {
      console.log('something going wrong with endpoint data')
    }
  })
}
</script>
