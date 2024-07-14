<template>
  <RouterLink :to="'/department/' + slug">
    <div class="bg-white shadow-md rounded-lg p-6 cursor-pointer h-64 flex flex-col justify-between hover:shadow-lg">
      <div>
        <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
        <p class="text-gray-700 flex-grow overflow-hidden">
          {{ description }}
        </p>
      </div>
      <div class="mt-4">
        <div class="flex justify-between text-sm text-gray-600">
          <div>
              <span class="text-green-500 text-sm flex items-center">
                <font-awesome-icon
                  :icon="['fas', 'users']"
                />
              +15 active users
            </span>
          </div>
          <div>
            <span class="font-semibold">Projects Count:</span> {{ projectsCount }}
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  title: Text,
  description: Text,
  slug: Text
})
</script>
