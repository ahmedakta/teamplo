<template>
  <MainLayout>
    <!-- Header Section -->
    <header class="mx-auto text-white relative">
      <img
        src="../../assets/about-us-background.jpg"
        alt="Image 1"
        class="w-full object-fill rounded-lg shadow-lg"
      />
      <h3
        class="absolute bg-blue inset-0 flex items-center justify-center font-semibold text-4xl mt-20"
      >
        About Us
      </h3>
    </header>

    <!-- Why Us Section -->
    <section class="py-32">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl text-center mb-8 text-black">Why Us?</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="relative flex mt-20 justify-center">
            <img
              src="../../assets/about-us-1.png"
              alt="Image 1"
              class="z-10 rounded-lg shadow-lg w-3/4"
            />
            <img
              src="../../assets/about-us-2.png"
              alt="Image 2"
              class="absolute inset-y-0 left-0 transform -translate-x-10 -translate-y-20 rounded-lg shadow-lg w-3/4"
            />
          </div>

          <div class="pt-20">
            <p class="text-lg mb-4 text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam ratione
              maiores laudantium? Dolore corporis sed quas laudantium, natus quaerat accusamus
              nostrum tenetur consequatur deleniti, eum molestiae quis mollitia facilis doloribus
              pariatur, molestias quam nihil iusto doloremque sunt veritatis enim.
            </p>
            <p class="text-[#3AA9D0] md:mt-40">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aenean Pretium Lacinia Nisi
              Nec Iaculis. Aenean Sit Amet Odio Condimentum, Suspendisse Dapibus Finibus Ligula, Sit
              Amet Tincidunt Turpis. Nun.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission and Vision Section -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="w-full md:w-1/w">
            <h3 class="text-xl font-bold mb-4 text-[#3AA9D0]">Our Mission</h3>
            <p class="text-gray-700 mb-8">
              At Teamplo, our mission is to empower companies of all sizes with a single, unified
              platform that simplifies and enhances their management processes. We understand that
              running a business involves juggling numerous tasks, from project management and team
              collaboration to financial tracking and customer relations. Our goal is to bring all
              these functions together in one seamless platform, allowing businesses to operate more
              efficiently and effectively.
            </p>
            <h3 class="text-xl font-bold mb-4 text-[#3AA9D0]">Our Vision</h3>
            <p class="text-gray-700 mb-8">
              Our vision is to make Teamplo the most trusted and comprehensive business management
              software in the market. We are committed to continuous improvement and innovation,
              ensuring our platform evolves to meet the changing needs of businesses. By integrating
              advanced artificial intelligence capabilities, we aim to provide tools that not only
              streamline operations but also offer insights and optimizations that drive growth and
              success.
            </p>
          </div>
          <div class="flex w-1/2">
            <img src="../../assets/about-us-3.png" alt="Image 3" class="rounded-lg m-2 shadow-lg" />
            <img src="../../assets/about-us-4.png" alt="Image 3" class="rounded-lg m-2 shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-12 bg-[#3AA9D0]">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 text-white rounded-lg">
            <h4 class="text-3xl font-bold mb-4">Our Values</h4>
          </div>
          <div class="relative p-6 border-[1px] border-white text-white">
            <!-- Icon positioned in the top-right corner -->
            <div class="absolute -top-4 bg-[#3AA9D0] rounded-full p-2">
              <img
                src="../../assets/about-us-vector-1.svg"
                alt="Image 3"
                class="h-6 w-6 text-white"
              />
            </div>
            <!-- Card content -->
            <h4 class="text-xl font-bold mb-4">All-in-One Solution</h4>
            <p>
              Manage your projects, teams, finances, and customer relationships all in one place.
            </p>
          </div>
          <div class="relative p-6 border-[1px] border-white text-white">
            <!-- Icon positioned in the top-right corner -->
            <div class="absolute -top-4 bg-[#3AA9D0] rounded-full p-2">
              <img
                src="../../assets/about-us-vector-1.svg"
                alt="Image 3"
                class="h-6 w-6 text-white"
              />
            </div>
            <!-- Card content -->
            <h4 class="text-xl font-bold mb-4">User-Friendly Interface</h4>
            <p>
              Our platform is designed to be intuitive and easy to use, ensuring that all team
              members can get up to speed quickly.
            </p>
          </div>
          <div class="relative p-6 border-[1px] border-white text-white">
            <!-- Icon positioned in the top-right corner -->
            <div class="absolute -top-4 bg-[#3AA9D0] rounded-full p-2">
              <img
                src="../../assets/about-us-vector-1.svg"
                alt="Image 3"
                class="h-6 w-6 text-white"
              />
            </div>
            <!-- Card content -->
            <h4 class="text-xl font-bold mb-4">Customizable Features</h4>
            <p>
              Tailor the platform to suit your specific business needs, with customizable workflows
              and integrations.
            </p>
          </div>
          <div class="relative p-6 border-[1px] border-white text-white">
            <!-- Icon positioned in the top-right corner -->
            <div class="absolute -top-4 bg-[#3AA9D0] rounded-full p-2">
              <img
                src="../../assets/about-us-vector-1.svg"
                alt="Image 3"
                class="h-6 w-6 text-white"
              />
            </div>
            <!-- Card content -->
            <h4 class="text-xl font-bold mb-4">Real-Time Analytics</h4>
            <p>
              Gain valuable insights into your operations with our real-time analytics and reporting
              tools.
            </p>
          </div>
          <div class="relative p-6 border-[1px] border-white text-white">
            <!-- Icon positioned in the top-right corner -->
            <div class="absolute -top-4 bg-[#3AA9D0] rounded-full p-2">
              <img
                src="../../assets/about-us-vector-1.svg"
                alt="Image 3"
                class="h-6 w-6 text-white"
              />
            </div>
            <!-- Card content -->
            <h4 class="text-xl font-bold mb-4">AI-Driven Efficiency</h4>
            <p>
              Leverage artificial intelligence to automate routine tasks, identify trends, and make
              data-driven decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
</script>
