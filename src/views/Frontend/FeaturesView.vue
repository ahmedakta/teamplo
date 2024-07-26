<template>
  <MainLayout>
    <!-- Features Section -->
    <section class="py-32 h-full">
      <div class="container mx-auto px-4 text-black">
        <div class="grid md:grid-cols-2 gap-8 h-24 md:mb-10 mb-20">
          <div>
            <h3 class="text-4xl md:text-left text-center font-bold">Features</h3>
          </div>
          <div>
            <h3 class="mb-4 text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis placeat
              praesentium eius commodi alias harum molestiae exercitationem similique magni?
            </h3>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 h-auto mb-10">
          <!-- Feature Image -->
          <div class="w-full">
            <img src="../../assets/features-1.png" class="rounded-xl" width="100%" alt="" />
          </div>
          <!-- Feature List -->
          <div class="mt-auto mb-auto">
            <h3 class="text-3xl text-center md:text-left font-bold mb-4">
              Departments and projects managment
            </h3>
            <ul>
              <li>
                - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae explicabo
                saepe a doloribus unde pariatur quidem praesentium vitae. Obcaecati.
              </li>
              <li>
                - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae explicabo
                saepe a doloribus unde pariatur quidem praesentium vitae. Obcaecati.
              </li>
            </ul>
            <button class="text-white ml-1 py-2 px-12 m-4 w-full rounded bg-[#3AA9D0]">
              Contact Us
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 h-auto mb-10">
          <!-- Feature List -->
          <div class="mt-auto mb-auto order-2 md:order-1">
            <h3 class="text-3xl md:text-left text-center font-bold mb-4">
              Departments and projects managment
            </h3>
            <ul>
              <li>
                - Lorem ipsum dolor sit amet consectetur ad1ipisicing elit. Quasi beatae explicabo
                saepe a doloribus unde pariatur quidem praesentium vitae. Obcaecati.
              </li>
              <li>
                - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae explicabo
                saepe a doloribus unde pariatur quidem praesentium vitae. Obcaecati.
              </li>
            </ul>
            <button class="text-white w-full ml-1 py-2 px-12 m-4 rounded bg-[#3AA9D0]">
              Contact Us
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
          <!-- Feature Image -->
          <div class="w-full order-1 md:order-2">
            <img src="../../assets/feature-2.png" class="rounded-xl" width="100%" alt="" />
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 h-auto mb-10">
          <!-- Feature Image -->
          <div class="w-full order-1 md:order-2">
            <img src="../../assets/features-3.png" class="rounded-xl" width="100%" alt="" />
          </div>
          <!-- Feature List -->
          <div class="mt-auto mb-auto order-1 md:order-2">
            <h3 class="text-3xl text-left font-bold mb-4">Departments1 and projects managment</h3>
            <ul>
              <li>
                - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae explicabo
                saepe a doloribus unde pariatur quidem praesentium vitae. Obcaecati.
              </li>
              <li>
                - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae explicabo
                saepe a doloribus unde pariatur quidem praesentium vitae. Obcaecati.
              </li>
            </ul>
            <button class="text-white w-full ml-1 py-2 px-12 m-4 rounded bg-[#3AA9D0]">
              Contact Us
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 h-auto mb-10">
          <!-- Feature List -->
          <div class="mt-auto mb-auto order-2 md:order-1">
            <h3 class="text-3xl text-left font-bold mb-4">Departments and projects managment</h3>
            <ul>
              <li>
                - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae explicabo
                saepe a doloribus unde pariatur quidem praesentium vitae. Obcaecati.
              </li>
              <li>
                - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae explicabo
                saepe a doloribus unde pariatur quidem praesentium vitae. Obcaecati.
              </li>
            </ul>
            <button class="text-white w-full ml-1 py-2 px-12 m-4 rounded bg-[#3AA9D0]">
              Contact Us
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
          <!-- Feature Image -->
          <div class="w-full order-1 md:order-2">
            <img src="../../assets/features-4.png" class="rounded-xl" width="100%" alt="" />
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
</script>
