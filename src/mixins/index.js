// this file for functions used a lot
import { useUserStore } from '@/stores/user'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
const userStore = useUserStore()
import { defineStore } from 'pinia'

export default {
  methods: {
    isLoggedIn(redirect) {
      if (userStore.id) {
        router.push(redirect)
      } else {
        generalStore.isLoginOpen = true
      }
    }
  }
}
