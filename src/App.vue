<script setup>
import { useGeneralStore } from '@/stores/general'
import { useUserStore } from '@/stores/user'
import { ref, onMounted } from 'vue'
import AuthOverlay from '@/components/AuthOverlay.vue'
const generalStore = useGeneralStore()
const userStore = useUserStore()
import swal from 'sweetalert'
onMounted(async () => {
  // alert(1)
  // // TODO we should read from local storage directly
  try {
    generalStore.hasSessionExpired()
    // generalStore.getRandomUsers('suggested')
    // generalStore.getRandomUsers('following')

    if (userStore.userInfo()) {
      userStore.getUser()
    }
  } catch (error) {
    console.log(error)
  }
  // userStore.getUser()
})
</script>

<template>
  <AuthOverlay v-if="generalStore.isLoginOpen" />

  <RouterView />
</template>
