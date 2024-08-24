<template>
  <MainLayout>
    <section class="py-32 h-full text-center items-center mx-auto">
      <div class="container mx-auto px-4 text-black">
        <div class="grid md:grid-cols-2 gap-12 h-[43rem] md:h-[35rem]">
          <!-- Feature List -->
          <div class="mt-auto md:text-left text-center mb-auto md:w-3/4 w-full order-1">
            <h3 class="text-3xl font-bold mb-4">Intuitive and Easy to Use</h3>
            Our platform is designed with a user-centric approach, making it easy for you to
            navigate and utilize its features. With a clean, modern interface and straightforward
            functionality, Teamplo ensures a hassle-free experience for all users.
          </div>
          <!-- Feature Image -->
          <div class="relative w-full order-2">
            <div class="relative flex md:mt-20 justify-center">
              <img
                src="../../assets/why-us-1.png"
                alt="Image 1"
                class="z-10 rounded-lg w-1/2 translate-y-40 md:-translate-x-60 -translate-x-28"
              />
              <img
                src="../../assets/why-us-2.png"
                alt="Image 2"
                class="absolute inset-y-0 left-0 transform md:-translate-x-10 -translate-x-0 -translate-y-20 rounded-lg w-3/4"
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
          <div class="relative flex mt-20 justify-center order-2 md:order-1">
            <!-- Feature Image -->
            <img
              src="../../assets/why-us-5.png"
              alt="Image 1"
              class="z-10 rounded-lg md:w-3/4 w-full"
            />
            <img
              src="../../assets/why-us-4.png"
              alt="Image 2"
              class="absolute inset-y-0 left-0 transform -translate-x-10 -translate-y-20 rounded-lg md:w-1/2 w-full"
            />
          </div>
          <!-- Feature List -->
          <div class="mt-auto mb-auto md:text-left text-center md:w-3/4 w-full order-1">
            <h3 class="text-3xl font-bold mb-4">Dedicated Support at Your Service</h3>
            At Teamplo, we pride ourselves on providing top-notch customer support. Our dedicated
            team is available to assist you with any questions or issues, ensuring you get the most
            out of our platform with timely and effective solutions.
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 h-auto mb-10">
          <!-- Feature List -->
          <div class="mt-auto mb-auto md:text-left text-center md:w-3/4 w-full order-1">
            <h3 class="text-3xl font-bold mb-4">Adapts to Your Growing Needs</h3>
            Whether you’re a small startup or a large enterprise, Teamplo scales with your business.
            Our flexible platform can be customized to fit your specific needs and can grow
            alongside your company, making it a perfect fit for any organization.
          </div>
          <div class="relative flex mt-20 justify-center order-2">
            <!-- Feature Image -->
            <img
              src="../../assets/why-us-7.png"
              alt="Image 1"
              class="z-10 rounded-lg md:w-3/4 w-full"
            />
            <img
              src="../../assets/why-us-6.png"
              alt="Image 2"
              class="absolute inset-y-0 left-0 transform -translate-x-10 -translate-y-20 rounded-lg md:w-1/2 w-full"
            />
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 h-auto mb-10">
          <div class="relative flex mt-20 justify-center order-2 md:order-1">
            <!-- Feature Image -->
            <img
              src="../../assets/why-us-9.png"
              alt="Image 1"
              class="z-10 rounded-lg md:w-3/4 w-full"
            />
            <img
              src="../../assets/why-us-8.png"
              alt="Image 2"
              class="absolute inset-y-0 left-0 transform -translate-x-10 -translate-y-20 rounded-lg md:w-1/2 w-full"
            />
          </div>
          <!-- Feature List -->
          <div class="mt-auto mb-auto md:text-left text-center md:w-3/4 w-full order-1">
            <h3 class="text-3xl font-bold mb-4">Make Informed Decisions</h3>
            Teamplo provides powerful analytics and reporting tools to help you make data-driven
            decisions. Gain valuable insights into your projects, performance, and resource
            allocation, enabling you to drive strategic improvements and achieve your business
            goals.
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 h-auto mb-10">
          <!-- Feature List -->
          <div class="mt-auto mb-auto md:text-left text-center md:w-3/4 w-full order-1">
            <h3 class="text-3xl font-bold mb-4">Streamline Your Operations</h3>
            Teamplo offers an all-in-one solution for managing every aspect of your company. From
            tracking projects and tasks to managing employee performance and resources, our platform
            integrates seamlessly to ensure smooth and efficient operations.
          </div>
          <div class="relative flex mt-20 justify-center order-2">
            <!-- Feature Image -->
            <img
              src="../../assets/why-us-11.png"
              alt="Image 1"
              class="z-10 rounded-lg md:w-3/4 w-full"
            />
            <img
              src="../../assets/why-us-10.png"
              alt="Image 2"
              class="absolute inset-y-0 left-0 transform -translate-x-10 -translate-y-20 rounded-lg md:w-1/2 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
</script>
