<template>
  <div class="text-black p-5">
    <div v-if="loaded">
      <Line
        :data="storeData.departments_progress.chart"
        :options="options"
        v-if="storeData.departments_progress"
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
import { Line } from 'vue-chartjs'

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
  animations: {
    tension: {
      duration: 1000,
      easing: 'easeInQuad',
      from: 0,
      to: 1,
      loop: true
    }
  },
  scales: {
    y: {
      // defining min and max so hiding the dataset does not change scale range
      min: 0,
      max: 100
    }
  },
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
