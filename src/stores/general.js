import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useProjectStore } from '@/stores/project'
import { reactive, ref } from 'vue'
import { useDataTableStore } from '@/stores/datatable'
import axios from '../../plugins/axios'
const router = useRouter()
export const useGeneralStore = defineStore('general', {
  state: () => ({
    isLoginOpen: false,
    filterParams: reactive({}),
    router: useRouter(),
    route: useRoute(),
    projectStore: useProjectStore(),
    datatableStore: useDataTableStore(),
    currentModal: null,
    currentTab: ref(null),
    isSideNavOpen: ref(false),
    isLoading: ref(false),
    data: [],
    selectedPost: null,
    ids: null,
    isBackUrl: '/',
    posts: null,
    suggested: null,
    following: null
  }),
  actions: {
    // update filter params from query of url
    updateFilterParams() {
      this.filterParams = { ...this.filterParams, ...this.route.query }
    },
    // this function responsible to set data for "DataTable" only after makeRequest()
    setDataTable() {
      this.isLoading = true
      try {
        // custimize values for datatable library
        if (this.data.data && this.data.cols) {
          this.data = this.data
          this.datatableStore.cols = JSON.parse(this.data.cols)
          this.datatableStore.data = this.data.data
          this.datatableStore.params = reactive({
            current_page: this.data.data.current_page,
            page_size: this.data.data.per_page,
            sort_column: 'id',
            total_rows: this.data.data.total,
            sort_direction: 'asc'
          })
          this.isLoading = false
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    // we using this function to make all requests.
    async makeRequest(url, params = null, method = 'GET', redirect = null, refreshUrl = null) {
      // we should update the params with the qureiesin the URL
      this.isLoading = true
      try {
        // Ensure method is in uppercase
        method = method.toUpperCase()

        // Validate method
        if (!['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'].includes(method)) {
          throw new Error(`Unsupported request method: ${method}`)
        }
        let reqParams = { withCredentials: true, params }
        const response = await axios[method.toLowerCase()](url, reqParams)
        // show the response modal response
        if (response.data.data) {
          // update URL with filterParam
          if (params && method != 'POST') {
            this.router.push({ query: params })
          }
          this.data = response.data.data
        }
        if (refreshUrl) {
          this.makeRequest(refreshUrl, this.filterParams).then(() => {
            this.setDataTable()
          })
        }
        this.isLoading = false
        // redirect
        if (redirect) {
          this.router.push(redirect)
        }
        this.showSuccessMessage(response.data.message, response.status)
      } catch (error) {
        if (error.response) {
          this.showSuccessMessage(error.response.data.message, error.response.status)
        } else if (error.request) {
          // The request was made but no response was received
          this.showSuccessMessage(error.request, error.response.status)
        } else {
          // Something happened in setting up the request that triggered an error
          this.showSuccessMessage(error.message, 400)
        }
      }
    },
    async deleteData(url) {
      try {
        swal({
          title: 'Are you sure ?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Logout',
          denyButtonText: 'Cancel'
        }).then(result => {
          /* Read more about isConfirmed, isDenied below */
          if (result) {
            try {
              const response = axios.delete(url)
            } catch (error) {
              console.log(error)
            }
            swal('Deleted!', '', 'success')
            // this.data = this.getData('/api/projects')
          } else if (result.isDenied) {
            swal('Error', '', 'warning')
          }
        })
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert('Record not found')
        } else {
          console.error(error)
          alert('An error occurred')
        }
      }
    },
    async isLoggedIn(redirect) {
      let storedUserInfo = JSON.parse(localStorage.getItem('user'))
      if (storedUserInfo) {
        if (redirect) {
          router.go({ name: 'hi' })
        }
        return 1
      } else {
        this.isLoginOpen = true
      }
    },
    hasSessionExpired() {
      axios.interceptors.response.use(
        response => {
          console.log(response)
          // Call was successful, continue.
          return response
        },
        error => {
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
            // case 500:
            //   alert('Oops, something went wrong!  The team has been notified.')
            //   break
            default:
              // Allow individual requests to handle other errors
              return Promise.reject(error)
          }
        }
      )
    },
    setCurrentTab(tabName) {
      this.router.push({ query: { tab: tabName } })
      this.currentTab = tabName
    },
    // Function to show success message
    showSuccessMessage(message, isSuccess) {
      const successMessage = document.getElementById('successMessage')
      const successMessageText = document.getElementById('successMessageText')
      const successIcon = document.getElementById('successIcon')
      const errorIcon = document.getElementById('errorIcon')

      // check all element if exist
      if (successMessage && successMessageText && successIcon && errorIcon) {
        // Set success message text
        successMessageText.textContent = message

        // Show appropriate icon based on isSuccess parameter
        if (isSuccess == 200) {
          successIcon.classList.remove('hidden')
          errorIcon.classList.add('hidden')
        } else {
          successIcon.classList.add('hidden')
          errorIcon.classList.remove('hidden')
        }
        // Show the success message
        successMessage.classList.remove('hidden')

        // Hide the success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.add('hidden')
        }, 5000) // 5000 milliseconds = 5 seconds
      }
    },
    openModal(modal, params = {}) {
      if (modal == 'assignUserModal') {
        // console.log(params.department_id)
        this.projectStore.fetchAssignmentUsers(params)
      }
      if (this.currentModal != null) {
        this.closeModal()
        return
      }
      this.currentModal = modal
    },
    closeModal() {
      this.currentModal = null
    },
    goBack() {
      this.router.go(-1)
    }
  },
  persist: true
})
