<template>
  <MainLayout>
    <section class="py-32 h-full">
      <div class="container mx-auto px-4 text-black">
        <div class="grid md:grid-cols-2 gap-12 h-[40rem]">
          <!-- Feature List -->
          <div class="mt-auto mb-auto">
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
            <button class="text-white ml-1 py-2 px-12 m-4 rounded bg-[#3AA9D0]">
              Contact Us
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
          <!-- Feature Image -->
          <div class="relative w-full">
            <div class="relative flex mt-20 justify-center">
              <img
                src="../../assets/why-us-1.png"
                alt="Image 1"
                class="z-10 rounded-lg w-1/2 translate-y-40 -translate-x-60"
              />
              <img
                src="../../assets/why-us-2.png"
                alt="Image 2"
                class="absolute inset-y-0 left-0 transform -translate-x-10 -translate-y-20 rounded-lg w-3/4"
              />
              <img
                src="../../assets/why-us-3.png"
                alt="Image 2"
                class="absolute z-5 inset-y-0 right-0 transform -translate-x-120 translate-y-20 rounded-lg w-1/2"
              />
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 h-auto mb-10">
          <!-- Feature List -->
          <div class="mt-auto mb-auto">
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
            <button class="text-white ml-1 py-2 px-12 m-4 rounded bg-[#3AA9D0]">
              Contact Us
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
          <!-- Feature Image -->
          <div class="w-full">
            <img src="../../assets/feature-2.png" width="100%" alt="" />
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 h-auto mb-10">
          <!-- Feature Image -->
          <div class="w-full">
            <img src="../../assets/features-3.png" width="100%" alt="" />
          </div>
          <!-- Feature List -->
          <div class="mt-auto mb-auto">
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
            <button class="text-white ml-1 py-2 px-12 m-4 rounded bg-[#3AA9D0]">
              Contact Us
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 h-auto mb-10">
          <!-- Feature List -->
          <div class="mt-auto mb-auto">
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
            <button class="text-white ml-1 py-2 px-12 m-4 rounded bg-[#3AA9D0]">
              Contact Us
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
          <!-- Feature Image -->
          <div class="w-full">
            <img src="../../assets/features-4.png" width="100%" alt="" />
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
</script>
