<template>
    <MainLayout>
        <!-- Blog View -->
        <section class="container mx-auto py-32 p-5">
            <header class="flex justify-between">
                <h1 class="text-xl font-bold">Example Header</h1>
                <a href="#">
                    <font-awesome-icon :icon="['fa-regular', 'heart']" />
                    32
                </a>
            </header>
            <!-- Blog Image -->
            <img src="/src/assets/blogs/blog-view.png" class="w-full mt-4 mx-auto md:h-[40rem] rounded-2xl" alt="">
            <!-- Suthor Section -->
            <div class="flex justify-between mt-10">
                <div class="flex">
                    <img src="/src/assets/default_profile_image.png" class="mr-5" alt="">
                    <p class="mt-3">Melike</p>
                </div>
                <font-awesome-icon @click="generalStore.openModal('shareModal')"
                    class="py-2 px-2 bg-[#3AA9D0] rounded-xl text-white text-xl" :icon="['fa', 'share-nodes']" />
            </div>
            <!-- Page Content Section  -->
            <div class="container mx-auto mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure unde animi eius quae earum voluptatibus
                deserunt ad alias provident excepturi eum quibusdam, ut enim commodi sit vitae. Obcaecati mollitia
                nesciunt atque a temporibus est, perspiciatis delectus, autem blanditiis pariatur consectetur, repellat
                itaque facere minima natus consequatur ea tenetur earum dolorum.
                <img src="/src/assets/blogs/blog-content.png" class="w-full mt-4 mx-auto md:h-[40rem] rounded-2xl"
                    alt="">
            </div>
            <!-- Tags -->
            <div class="flex space-x-2 py-10">
                <span class="bg-gray-200 text-black px-3 py-1 rounded-full">Tag 1</span>
                <span class="bg-gray-200 text-black px-3 py-1 rounded-full">Tag 2</span>
                <span class="bg-gray-200 text-black px-3 py-1 rounded-full">Tag 3</span>
                <span class="bg-gray-200 text-black px-3 py-1 rounded-full">Tag 4</span>
            </div>
        </section>
        <!-- Maybe you Like section -->
        <section class="container mx-auto">
            <Blogs :blogs="blogs" header="Maybe You Like" />
        </section>
    </MainLayout>
</template>
<script setup>
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
import { ref } from 'vue'
import Blogs from '@/components/Frontend/Blogs.vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()

const blogs = ref([
    {
        id: 1,
        header:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        image: '/src/assets/blogs/blog1.png',
        created_at: '27 APRIL 2024',
        reading_time: '10 min'
    },
    {
        id: 2,
        header:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        image: '/src/assets/blogs/blog2.png',
        created_at: '27 APRIL 2024',
        reading_time: '10 min'
    },
    {
        id: 3,
        header:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        image: '/src/assets/blogs/blog3.png',
        created_at: '27 APRIL 2024',
        reading_time: '10 min'
    },
    {
        id: 4,
        header:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        image: '/src/assets/blogs/blog4.png',
        created_at: '27 APRIL 2024',
        reading_time: '10 min'
    }
])
</script>