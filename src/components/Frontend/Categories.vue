<template>
  <div class="bg-[#FFFAF5]">
    <div class="container mx-auto py-10">
      <h1 class="text-4xl text-center py-5 font-bold text-black">
        <span class="text-[#3AA9D0] font-bold">Admin Panel</span> For the company CEO
      </h1>
      <p class="text-center py-5 text-gray-500 max-w-4xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing
        elit.
        Quae
        est debitis
        quasi reprehenderit voluptatibus deserunt, corrupti labore adipisci reiciendis et atque fuga, non obcaecati
        dolores iusto ipsa, magnam iste dicta.</p>
      <!-- <div class="flex flex-wrap justify-between w-[25rem] mt-5 mx-auto">
      <app-button v-for="category in categories" :key="category.id" :active="currentCategory.id == category.id"
        @click="currentCategory = category">{{ category.name }}
      </app-button>
    </div> -->
      <!-- <Category :category="currentCategory" /> -->


      <div class="md:flex py-5">
        <ul
          class="flex-column font-bold w-1/2 space-y space-y-4 text-sm  text-black dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li class="bg-white px-4 py-3 border-[1px] border-[#3AA9D0] rounded-xl ">
            <a href="#" class="inline-flex mb-5 font-bold text-xl items-center rounded-lg active w-full "
              aria-current="page">
              Project Management
              <i class="ml-auto">
                <font-awesome-icon :icon="['fa', 'arrow-down']" />
              </i>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas omnis eveniet tenetur eius nesciunt, animi
              laborum voluptas distinctio rem deleniti.</p>
          </li>
          <li class="bg-white px-4 py-3 shadow rounded-xl text-center mx-auto justify-center">
            <a href="#" class="inline-flex font-bold text-xl items-center rounded-lg w-full text-black" aria-current="page">
              Project Management
              <i class="ml-auto">
                <font-awesome-icon :icon="['fa', 'arrow-right']" />
              </i>
            </a>
          </li>
          <li class="bg-white px-4 py-3 shadow rounded-xl text-center mx-auto justify-center">
            <a href="#" class="inline-flex font-bold text-xl items-center rounded-lg w-full text-black" aria-current="page">
              Project Management
              <i class="ml-auto">
                <font-awesome-icon :icon="['fa', 'arrow-right']" />
              </i>
            </a>
          </li>
          <li class="bg-white px-4 py-3 shadow rounded-xl text-center mx-auto justify-center">
            <a href="#" class="inline-flex font-bold text-xl items-center rounded-lg w-full text-black" aria-current="page">
              Project Management
              <i class="ml-auto">
                <font-awesome-icon :icon="['fa', 'arrow-right']" />
              </i>
            </a>
          </li>
        </ul>
        <div class="p-6 text-medium text-gray-500 dark:text-gray-400 rounded-lg w-full">
          <img src="../../assets/project-manamgement.svg" class="mx-auto hidden lg:block" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/Frontend/AppButton.vue'
import Category from '@/components/Frontend/Category.vue'
import { ref, onMounted } from 'vue'
const props = defineProps({
  categories: Array
})
const currentCategory = ref(props.categories[0])
</script>
