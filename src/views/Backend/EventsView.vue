<template>
  <MainLayout> Events View 
    <VDatePicker
          v-model="selectedDate"
          borderless
          :initial-page="{ month: 4, year: 2019 }"
          :color="selectedColor"
          :attributes="attrs"
          expanded
          />
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
</script>
