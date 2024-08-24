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
            <h3 class="mb-4 text-left text-[#3AA9D0]">
              We can improve Teamplo's features based on your company's needs, tailoring tools and
              functionalities to better support your operations.
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
              Centralized Communication
            </h3>
            <ul>
              <li>- Seamless messaging between teams</li>
              <li>- Integrated notifications and updates</li>
            </ul>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 h-auto mb-10">
          <!-- Feature List -->
          <div class="mt-auto mb-auto order-2 md:order-1">
            <h3 class="text-3xl md:text-left text-center font-bold mb-4">
              Streamlined Project Management
            </h3>
            <ul>
              <li>- Task tracking and progress visualization</li>
              <li>- Automated project timelines and milestones</li>
            </ul>
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
            <h3 class="text-3xl text-left font-bold mb-4">Resource Management</h3>
            <ul>
              <li>- Efficient allocation of team resources</li>
              <li>- Comprehensive resource usage analytics</li>
            </ul>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 h-auto mb-10">
          <!-- Feature List -->
          <div class="mt-auto mb-auto order-2 md:order-1">
            <h3 class="text-3xl text-left font-bold mb-4">Data-Driven Insights</h3>
            <ul>
              <li>- Real-time performance dashboards</li>
              <li>- In-depth reporting and analytics</li>
            </ul>
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
