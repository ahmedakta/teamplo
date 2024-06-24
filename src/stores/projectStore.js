import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
import { useGeneralStore } from '@/stores/general'
export const useProjectStore = defineStore('task', {
  state: () => ({
    data: [],
    generalStore: useGeneralStore(),
    projects: []
  }),
  actions: {
    async fetchAssignmentUsers(department_id) {
      try {
        this.data = []
        const response = await axios.get('/api/department/users/' + department_id, {
          withCredentials: true
        })
        this.data = response.data.data
      } catch (error) {
        alert(error)
        console.error('Error fetching projects:' + error)
      }
    },
    async fetchProjects() {
      try {
        const response = await axios.get('/api/projects', {
          withCredentials: true
        })
        this.projects = response.data
      } catch (error) {
        alert(error)
        console.error('Error fetching projects:' + error)
      }
    },
    async getTokens() {
      await axios.get('/sanctum/csrf-cookie')
    },
    async deleteTask(task) {
      try {
        const response = await axios.post('/api/tasks/delete/' + task.id)
        this.tasks = response.data
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    }
  }
})
