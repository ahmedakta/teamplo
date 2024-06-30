import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
import { ref, reactive } from 'vue'
export const useDataTableStore = defineStore('datatable', {
  state: () => ({
    // tasks: []
    datatable: ref(null),
    cols: ref([]),
    params: ref({}),
    data: ref([]),
  }),
  actions: {
  }
})
