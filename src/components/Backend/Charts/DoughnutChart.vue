<template>
  <div class="text-black p-5">
    <div v-if="loaded">
      <Doughnut
        :data="storeData.company_users.chart"
        :options="options"
        v-if="storeData.company_users"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
let loaded = false

const props = defineProps({
  storeData: Object
})
onMounted(() => {
  // https://vue-chartjs.org/guide/#chart-with-local-data
  // The problem with this approach is that Chart.js tries to render your chart and access the chart data synchronously
  loaded = true
})
const options = {
  responsive: true,
  maintainAspectRatio: false
}
// options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
</script>
