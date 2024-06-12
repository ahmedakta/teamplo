// this file for functions used a lot
import { useUserStore } from '@/stores/user'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
const userStore = useUserStore()
import { defineStore } from 'pinia'

export default {
  data() {
    return {
      currentModal: null,
    };
  },
  methods: {
    isLoggedIn(redirect) {
      if (userStore.id) {
        router.push(redirect)
      } else {
        generalStore.isLoginOpen = true
      }
    },
    openModal(modal) {
      alert(modal)
      // this.currentModal = modal;
      // this.$refs.modal.style.display = 'block';
    },
    closeModal() {
      // this.currentModal = null;
      // this.$refs.modal.style.display = 'none';
    },
  }
}
