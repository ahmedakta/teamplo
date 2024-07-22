<template>
  <MainLayout>
    <section>
      <div class="container mx-auto px-4">
        <!-- Form Section -->
        <div
          class="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-7 rounded-xl mt-10 p-5 md:p-20 bg-white"
        >
          <form
            @submit.prevent="
              generalStore.makeRequest('api/content/save', data, 'POST', '/projects')
            "
          >
            <!-- Side by side inputs -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700"
                  >Content Title</label
                >
                <input
                  type="text"
                  id="phone"
                  v-model="data.content_title"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3AA9D0] text-black focus:border-[#3AA9D0] sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700"
                  >Content Slug</label
                >
                <input
                  type="text"
                  id="email"
                  v-model="data.slug"
                  name="email"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3AA9D0] text-black focus:border-[#3AA9D0] sm:text-sm"
                  placeholder="slug-example"
                  disabled
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700"
                  >Content Keywords</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3AA9D0] text-black focus:border-[#3AA9D0] sm:text-sm"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700"
                  >Content Category</label
                >
                <select
                  name=""
                  id=""
                  class="border w-full border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                >
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">C</option>
                </select>
              </div>
            </div>

            <!-- Full-width input -->
            {{ data.content_body }}
            <div class="mb-6">
              <label for="full-name" class="block text-sm font-medium text-gray-700">Subject</label>
              <Editor
                v-model="data.content_body"
                editorStyle="height: 320px"
                class="mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-[#3AA9D0] text-black focus:border-[#3AA9D0] sm:text-sm"
              />
            </div>
            <!-- Full-width input -->
            <div class="mb-6">
              <label for="address" class="block text-sm font-medium text-gray-700"
                >Phone Number</label
              >
              <input
                type="tel"
                id="address"
                name="address"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3AA9D0] text-black focus:border-[#3AA9D0] sm:text-sm"
                placeholder="Phone Number"
              />
            </div>
            <!-- Full-width input -->
            <div class="mb-6">
              <label for="address" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name=""
                id=""
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
                SAVE
                <font-awesome-icon class="m-2" :icon="['fa', 'save']" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Backend/MainLayout.vue'
import { ref, onMounted, reactive } from 'vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
import Editor from 'primevue/editor'
import { useRoute } from 'vue-router'
const route = useRoute()
const data = ref([])
const testValue = reactive('<p>Your initial content goes here</p>')

onMounted(() => {
  try {
    getContent()
  } catch (error) {
    console.log(error)
  }
})

const getContent = async (filterParams = null) => {
  let url = '/api/content/' + route.params.slug
  generalStore.makeRequest(url, filterParams).then(() => {
    // custimize values for datatable library
    if (generalStore.data) {
      data.value = generalStore.data
      generalStore.isLoading = false
    } else {
      console.log('something going wrong with endpoint data')
    }
  })
}
</script>
