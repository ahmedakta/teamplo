<template>
  <MainLayout>
    <!-- Header Section -->
    <header class="mx-auto text-white relative">
      <img src="../../assets/header.png" alt="Image 1" class="w-full rounded-lg shadow-lg" />
      <h3 class="absolute bg-blue inset-0 flex items-center justify-center font-semibold text-4xl">
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
            <p class="text-[#3AA9D0] text-sm md:mt-40">
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
      <div class="container mx-auto px-4">"
        <div class="grid md:grid-cols-2 gap-8">
          <div class="w-full  text-xl md:w-1/2">
            <h3 class="font-bold mb-4 text-[#3AA9D0]">Our Mission</h3>
            <p class="text-gray-700 mb-8">
              Müşterilerimizin İhtiyaçlarını Anlamak Ve En Uygun Çözümleri Sunarak İşlerini
              Büyütmelerine Katkıda Bulunmak.
            </p>
            <h3 class="text-xl font-bold mb-4 text-[#3AA9D0]">Our Vision</h3>
            <p class="text-gray-700 mb-8">
              Sektörde Lider Bir Konumda Olmak Ve Müşterilerimize Değer Yaratan Çözümler Sunarak
              Sürekli Büyümek.
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
            <h4 class="text-xl font-bold mb-4">İnovasyon Ve Sürekli Gelişme</h4>
            <p>
              Sürekli Olarak Kendimizi Geliştirerek Müşterilerimize En İyi Hizmeti Sunmayı
              Hedefliyoruz.
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
            <h4 class="text-xl font-bold mb-4">İnovasyon Ve Sürekli Gelişme</h4>
            <p>
              Sürekli Olarak Kendimizi Geliştirerek Müşterilerimize En İyi Hizmeti Sunmayı
              Hedefliyoruz.
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
            <h4 class="text-xl font-bold mb-4">İnovasyon Ve Sürekli Gelişme</h4>
            <p>
              Sürekli Olarak Kendimizi Geliştirerek Müşterilerimize En İyi Hizmeti Sunmayı
              Hedefliyoruz.
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
            <h4 class="text-xl font-bold mb-4">İnovasyon Ve Sürekli Gelişme</h4>
            <p>
              Sürekli Olarak Kendimizi Geliştirerek Müşterilerimize En İyi Hizmeti Sunmayı
              Hedefliyoruz.
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
            <h4 class="text-xl font-bold mb-4">İnovasyon Ve Sürekli Gelişme</h4>
            <p>
              Sürekli Olarak Kendimizi Geliştirerek Müşterilerimize En İyi Hizmeti Sunmayı
              Hedefliyoruz.
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
