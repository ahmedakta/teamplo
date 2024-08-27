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
              <li>
                - Centralized communication platforms provide smooth, unified messaging between
                teams, eliminating tool-switching and reducing misunderstandings.
              </li>
              <li>
                - Centralized communication consolidates notifications into a single feed, keeping
                team members informed with real-time, customizable alerts without overwhelming
                users.
              </li>
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
              <li>
                - Streamlined project management systems provide real-time task tracking and
                progress visualization, with visual dashboards and detailed reports that help teams
                stay organized and on track.
              </li>
              <li>
                - Automated project management tools create timelines and milestones to set and
                track deadlines, preventing delays and keeping the project on schedule with timely
                reminders and updates.
              </li>
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
              <li>
                - Resource management systems optimize team resource allocation by aligning skills
                and availability with project needs, ensuring tasks are assigned to the right
                individuals to maximize productivity and minimize bottlenecks.
              </li>
              <li>
                - Comprehensive analytics tools provide detailed insights into resource usage,
                helping teams track effectiveness, make informed decisions, and adjust strategies to
                enhance efficiency and balance workload.
              </li>
            </ul>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 h-auto mb-10">
          <!-- Feature List -->
          <div class="mt-auto mb-auto order-2 md:order-1">
            <h3 class="text-3xl text-left font-bold mb-4">Data-Driven Insights</h3>
            <ul>
              <li>
                - Real-time performance dashboards offer up-to-the-minute data on key metrics,
                providing a clear visual representation of trends to help teams make quick, informed
                decisions and improve overall visibility and responsiveness.
              </li>
              <li>
                - In-depth reporting and analytics offer comprehensive insights into data patterns
                and trends, supporting strategic planning, identifying improvement areas, and
                enabling data-driven decision-making.
              </li>
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
