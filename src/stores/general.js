import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import axios from '../../plugins/axios'
const router = useRouter()
export const useGeneralStore = defineStore('general', {
  state: () => ({
    isLoginOpen: false,
    isEditProfileOpen: false,
    isLoading: false,
    data: [],
    selectedPost: null,
    ids: null,
    isBackUrl: '/',
    posts: null,
    suggested: null,
    following: null
  }),
  actions: {
    async getData(url)
    {
      try {
        const response = await axios.get(url, {
          withCredentials: true
        })
        this.data = response.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async isLoggedIn(redirect) {
      let storedUserInfo = JSON.parse(localStorage.getItem('user'))
      if (storedUserInfo) {
        if (redirect) {
          router.push({ name: 'hi' })
        }
        return 1
      } else {
        this.isLoginOpen = true
      }
    },
    hasSessionExpired() {
      axios.interceptors.response.use(
        (response) => {
          console.log(response)
          // Call was successful, continue.
          return response
        },
        (error) => {
          switch (error.response.status) {
            case 401: // Not logged in
            case 419: // Session expired
            case 503: // Down for maintenance
              console.log('Error : ' + error.response.data.message);
              alert(error.response.data.message);
              // alert('fuck you')
              // Bounce the user to the login screen with a redirect back
              useUserStore().resetUser()
              localStorage.removeItem('user')
              window.location.href = '/'
              break
            case 500:
              alert('Oops, something went wrong!  The team has been notified.')
              break
            default:
              // Allow individual requests to handle other errors
              return Promise.reject(error)
          }
        }
      )
    }
  },
  persist: true
})
