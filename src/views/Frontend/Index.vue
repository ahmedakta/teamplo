<template>
  <MainLayout>
    <Hero />
    <Trusted />
    <HowToUse />
    <!-- <Props :items="items" /> -->
    <Categories :categories="categories" />
    <OurSuccess />
    <Clients />
    <Blogs :blogs="blogs" header="Our Latest Blogs" />
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
import Trusted from '@/components/Frontend/TrustedCompanies.vue'
import HowToUse from '@/components/Frontend/HowToUse.vue'
import Hero from '@/components/Frontend/Hero.vue'
import Props from '@/components/Frontend/Props.vue'
import Categories from '@/components/Frontend/Categories.vue'
import OurSuccess from '@/components/Frontend/OurSuccess.vue'
import Clients from '@/components/Frontend/Clients.vue'
import Blogs from '@/components/Frontend/Blogs.vue'

const items = ref([
  {
    id: 1,
    name: 'Item 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'src/assets/props/prop1.png',
    features: [
      { name: 'Feature', isfeatured: 1 },
      { name: 'Feature', isfeatured: 0 },
      { name: 'Feature', isfeatured: 0 }
    ]
  },
  {
    id: 2,
    name: 'Item 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'src/assets/props/prop2.png',
    features: [
      { name: 'Feature', isfeatured: 1 },
      { name: 'Feature', isfeatured: 0 },
      { name: 'Feature', isfeatured: 0 }
    ]
  },
  {
    id: 3,
    name: 'Item 3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'src/assets/props/prop3.png',
    features: [
      { name: 'Feature', isfeatured: 1 },
      { name: 'Feature', isfeatured: 0 },
      { name: 'Feature', isfeatured: 0 }
    ]
  }
])
const categories = ref([
  {
    id: 1,
    name: 'Mobil Uyum',
    image: 'src/assets/categories/category1.png',
    active: true
  },
  {
    id: 2,
    name: 'Web Arayuz',
    image: 'src/assets/categories/category2.png',
    active: false
  },
  {
    id: 3,
    name: 'Yazilim',
    image: 'src/assets/categories/category3.png',
    active: false
  }
])
const blogs = ref([
  {
    id: 1,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: 'assets/blogs/blog1.png',
    created_at: '27 APRIL 2024'
  },
  {
    id: 2,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: 'assets/blogs/blog2.png',
    created_at: '27 APRIL 2024'
  },
  {
    id: 3,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: 'assets/blogs/blog3.png',
    created_at: '27 APRIL 2024'
  },
  {
    id: 4,
    header:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    image: 'assets/blogs/blog4.png',
    created_at: '27 APRIL 2024'
  }
])
</script>
