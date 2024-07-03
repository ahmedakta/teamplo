import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useDataTableStore = defineStore('datatable', {
  state: () => ({
    // tasks: []
    datatable: ref(null),
    cols: ref([]),
    params: ref([]),
    data: ref([])
  }),
  actions: {
    rowClick(project) {
      // router.push(`/project/${project.id}`)
      // alert(
      //   'project Details \n' +
      //     project.id +
      //     ', ' +
      //     project.project_name +
      //     ', ' +
      //     project.project_started_at +
      //     ', ' +
      //     project.status
      // )
    },
    getSelectedRows() {
      const selected = datatable.value.getSelectedRows()
      console.log(selected)
      alert('Rows selected: ' + selected?.length || 0)
    }
  }
})
