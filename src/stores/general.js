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
    async getData(url, params = null) {
      this.isLoading = true
      try {
        const response = await axios.get(url, {
          withCredentials: true,
          params
        })
        this.data = response.data
        this.isLoading = false
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async deleteData(url){
      try{
        swal({
          title: "Are you sure ?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Logout",
          denyButtonText: "Cancel"
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result) {
            try {  
              const response = axios.delete(url);
            } catch (error) {
              console.log(error)
            }
            swal("Deleted!", "", "success");
            // this.data = this.getData('/api/projects')
          } else if (result.isDenied) {
            swal("Error", "", "warning");
          }
        });
      }catch(error){
        if (error.response && error.response.status === 404) {
          alert('Record not found');
        } else {
          console.error(error);
          alert('An error occurred');
        }
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
              console.log('Error : ' + error.response.data.message)
              alert(error.response.data.message)
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
