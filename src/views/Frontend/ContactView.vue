<template>
  <MainLayout>
    <!-- Contact Information Section -->
    <section class="py-32">
      <div class="container mx-auto px-4">
        <!-- Head Of Page -->
        <div class="text-center text-gray-500 p-2">
          <h2 class="text-2xl text-center mb-8 text-black font-semibold">
            <span class="text-[#3AA9D0] font-semibold">Get in Touch </span>With Us
          </h2>
          <p>
            We're here to help! Whether you have questions, feedback, or need support, feel free to
            reach out to us anytime. Your success is our priority!
          </p>
        </div>
        <!-- Form And Information Section -->
        <div class="mt-10 grid grid-cols-1 md:grid-cols-12">
          <!-- Information Section -->
          <div
            class="relative col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-5 justify-center bg-[#3AA9D0] text-white p-5 md:p-20 order-2 md:order-1"
          >
            <img src="../../assets/contact-us-bg.svg" class="absolute right-0 top-0" alt="" />
            <h1 class="text-4xl">Contact Us</h1>
            <!-- List Of Contact -->
            <div class="p-6 rounded-lg relative">
              <div class="flex py-5 items-center space-x-4">
                <img
                  src="../../assets/contact-email.svg"
                  class="rounded-3xl px-5 py-5 text-white bg-[#48afd4]"
                  alt=""
                />
                <div>
                  <h2 class="text-lg font-bold">Email Us</h2>
                  <p class="text-white-600">teamplocom@gmail.com</p>
                </div>
              </div>
              <div class="flex py-5 items-center space-x-4">
                <img
                  src="../../assets/contact-phone.svg"
                  class="rounded-3xl px-5 py-5 text-white bg-[#48afd4]"
                  alt=""
                />
                <div>
                  <h2 class="text-lg font-bold">Phone Number</h2>
                  <p class="text-gray-600"></p>
                </div>
              </div>
              <div class="flex py-5 items-center space-x-4">
                <img
                  src="../../assets/contact-map.svg"
                  class="rounded-3xl px-5 py-5 text-white bg-[#48afd4]"
                  alt=""
                />
                <div>
                  <h2 class="text-lg font-bold">Turkey / Istanbul</h2>
                </div>
              </div>
            </div>
            <!-- Social Media Links -->
            <div>
              <!-- Social media header -->
              <div class="flex">
                <div class="border-l-[1px] w-10 border-white h-6 mr-2"></div>
                <p>Our Social Media</p>
              </div>
              <!-- Links -->
              <div class="flex justify-start space-x-4 py-4">
                <a href="">
                  <font-awesome-icon
                    :icon="['fab', 'facebook-f']"
                    class="text-white hover:bg-white hover:text-[#48afd4] text-2xl bg-[#48afd4] py-4 px-4 rounded-lg"
                  />
                </a>
                <a href="">
                  <font-awesome-icon
                    :icon="['fab', 'x-twitter']"
                    class="text-white hover:bg-white hover:text-[#48afd4] text-2xl bg-[#48afd4] py-4 px-4 rounded-lg"
                  />
                </a>
                <a href="">
                  <font-awesome-icon
                    :icon="['fab', 'linkedin']"
                    class="text-white hover:bg-white hover:text-[#48afd4] text-2xl bg-[#48afd4] py-4 px-4 rounded-lg"
                  />
                </a>
                <a href="https://instagram.com/teamplocom" target="_blank">
                  <font-awesome-icon
                    :icon="['fab', 'instagram']"
                    class="text-white hover:bg-white hover:text-[#48afd4] text-2xl bg-[#48afd4] py-4 px-4 rounded-lg"
                  />
                </a>
              </div>
            </div>
          </div>
          <!-- Form Section -->
          <div
            class="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-7 p-5 md:p-20 bg-white order-1 md:order-2"
          >
            <form @submit.prevent="contactUs()">
              <!-- Side by side inputs -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    v-model="data.name"
                    name="name"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3AA9D0] text-black focus:border-[#3AA9D0] sm:text-sm"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="data.email"
                    name="email"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3AA9D0] text-black focus:border-[#3AA9D0] sm:text-sm"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <!-- Full-width input -->
              <div class="mb-6">
                <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="data.subject"
                  name="subject"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3AA9D0] text-black focus:border-[#3AA9D0] sm:text-sm"
                  placeholder="Subject"
                />
              </div>
              <!-- Full-width input -->
              <div class="mb-6">
                <label for="phone" class="block text-sm font-medium text-gray-700"
                  >Phone Number</label
                >
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  v-model="data.phone"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3AA9D0] text-black focus:border-[#3AA9D0] sm:text-sm"
                  placeholder="Phone Number"
                />
              </div>
              <!-- Full-width input -->
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  v-model="data.message"
                  cols="30"
                  rows="5"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3AA9D0] text-black focus:border-[#3AA9D0] sm:text-sm"
                  placeholder="Write your message.."
                ></textarea>
              </div>

              <!-- Submit button -->
              <div>
                <button
                  type="submit"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#3AA9D0] hover:bg-[#48afd4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#48afd4]"
                >
                  SEND MESSAGE
                  <font-awesome-icon class="m-2" :icon="['fa', 'arrow-right']" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
import { useGeneralStore } from '@/stores/general'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const generalStore = useGeneralStore()
let data = ref([])

const contactUs = async () => {
  try {
    await userStore.getTokens()
    generalStore.makeRequest('api/contact-us', data, 'POST')
    data.value = []
    generalStore.openModal('EmailSuccessModal')
  } catch (error) {
    console.log(error)
  }
}
</script>
