<template>
  <!-- <vuetable ref="vuetable"
  :api-mode="false"
:fields=""
  :data=""
></vuetable> -->
</template>

<script setup>
import Vuetable from 'vuetable-2'

defineProps({
  items: { type: Array, required: true }
})
const data =
  '{"id":"71840","employee_name":"mpr51_0994","employee_name":"123","employee_name":"2333","profile_image":""}'
</script>
