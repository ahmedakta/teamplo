<template>
  <MainLayout>
  
    <!-- Header Section -->
    <header class="text-white ">
      <img src="../../assets/header.png" alt="Image 1" class="rounded-lg shadow-lg">
        <!-- <div class="container mx-auto px-4">
            <h1 class="text-3xl font-bold text-center">About Us</h1>
        </div> -->
    </header>

    <!-- Why Us Section -->
    <section class="py-12">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold text-center mb-8 text-black">Why Us?</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="flex justify-center">
                    <img src="../../assets/dashboard-v1.png" alt="Image 1" class="rounded-lg shadow-lg">
                </div>
                <div>
                    <p class="text-lg mb-4 text-black">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam ratione maiores laudantium? Dolore corporis sed quas laudantium, natus quaerat accusamus nostrum tenetur consequatur deleniti, eum molestiae quis mollitia facilis doloribus pariatur, molestias quam nihil iusto doloremque sunt veritatis enim.
                    </p>
                    <p class="text-gray-600">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aenean Pretium Lacinia Nisi Nec Iaculis. Aenean Sit Amet Odio Condimentum, Suspendisse Dapibus Finibus Ligula, Sit Amet Tincidunt Turpis. Nun.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission and Vision Section -->
    <section class="py-12 bg-gray-200">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4 text-black">Misyonumuz</h3>
                    <p class="text-gray-700 mb-8">
                        Müşterilerimizin İhtiyaçlarını Anlamak Ve En Uygun Çözümleri Sunarak İşlerini Büyütmelerine Katkıda Bulunmak.
                    </p>
                    <img src="../../assets/dashboard-v1.png" alt="Image 2" class="rounded-lg shadow-lg">
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4 text-black">Vizyonumuz</h3>
                    <p class="text-gray-700 mb-8">
                        Sektörde Lider Bir Konumda Olmak Ve Müşterilerimize Değer Yaratan Çözümler Sunarak Sürekli Büyümek.
                    </p>
                    <img src="../../assets/dashboard-v1.png" alt="Image 3" class="rounded-lg shadow-lg">
                </div>
            </div>
        </div>
    </section>

    <!-- Values Section -->
    <section class="py-12">
        <div class="container mx-auto px-4">
            <h3 class="text-2xl font-bold text-center mb-8 text-black">Değerlerimiz</h3>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-xl font-bold mb-4 text-black" >Müşteri Memnuniyeti</h4>
                    <p class="text-gray-700">
                        Müşterilerimizin İhtiyaçlarını Anlamak Ve En Uygun Çözümleri Sunarak İşlerini Büyütmelerine Katkıda Bulunmak.
                    </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-xl font-bold mb-4 text-black">İnovasyon Ve Sürekli Gelişme</h4>
                    <p class="text-gray-700">
                        Sürekli Olarak Kendimizi Geliştirerek Müşterilerimize En İyi Hizmeti Sunmayı Hedefliyoruz.
                    </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-xl font-bold mb-4 text-black">Şeffaflık Ve Güvenilirlik</h4>
                    <p class="text-gray-700">
                        İşimizi Şeffaf Ve Güvenilir Bir Şekilde Yürüterek Müşterilerimizle Sağlam İlişkiler Kuruyoruz.
                    </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-xl font-bold mb-4 text-black">Takım Çalışması Ve İşbirliği</h4>
                    <p class="text-gray-700">
                        Takım Çalışması Ve İşbirliğine Dayalı Bir Çalışma Ortamı Oluşturuyoruz.
                    </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-xl font-bold mb-4 text-black">Sosyal Sorumluluk</h4>
                    <p class="text-gray-700">
                        Topluma Katkıda Bulunan Ve Çevresel Sorumluluğa Duyarlı Bir Şirketiz.
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
