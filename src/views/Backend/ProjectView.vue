<template>
      <MainLayout>
        {{ data }}
        </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useGeneralStore } from '@/stores/general'

const route = useRoute()
const data = ref([])
const generalStore = useGeneralStore()

onMounted(() => {
  try {
    getProject()
  } catch (error) {
    console.log(error)
  }
})

const getProject = async (filterParams = null) => {
  let url = '/api/project/' + route.params.id
  generalStore.getData(url, filterParams).then(() => {
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