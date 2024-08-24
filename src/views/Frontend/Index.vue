<template>
  <MainLayout>
    <Hero />
    <Trusted />
    <HowToUse />
    <!-- <Props :items="items" /> -->
    <Categories :categories="categories" />
    <OurSuccess />
    <Clients
      :clients="clients"
      description="We are proud to have a diverse and satisfied client base. Here are just a few of the many organizations that have benefited from Teamplo:"
    />
    <Blogs :blogs="data.contents" header="Our Latest Blogs" isSlider="1" />
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MainLayout from '@/layouts/Frontend/MainLayout.vue'
import Trusted from '@/components/Frontend/TrustedCompanies.vue'
import HowToUse from '@/components/Frontend/HowToUse.vue'
import Hero from '@/components/Frontend/Hero.vue'
import Categories from '@/components/Frontend/Categories.vue'
import OurSuccess from '@/components/Frontend/OurSuccess.vue'
import Clients from '@/components/Frontend/Clients.vue'
import Blogs from '@/components/Frontend/Blogs.vue'
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()

const data = ref([])
onMounted(() => {
  try {
    generalStore.makeRequest('/api/home').then(() => {
      // custimize values for datatable library
      if (generalStore.data) {
        data.value = generalStore.data
        generalStore.isLoading = false
      } else {
        console.log('something going wrong with endpoint data')
      }
    })
  } catch (error) {
    console.log(error)
  }
})
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
    header: 'CEO',
    description:
      'At Teamplo, the CEO plays a pivotal role in project management. Their responsibilities include setting the strategic vision, allocating resources, and ensuring alignment with the company’s goals. The CEO works closely with senior management to define project priorities and drive overall success. By fostering a culture of innovation and excellence, the CEO empowers the entire organization to achieve its project objectives efficiently.',
    tab: 'firstTab'
  },
  {
    id: 2,
    header: 'Employee',
    description:
      'Employees at Teamplo are integral to the success of every project. They bring their unique skills and expertise to the table, contributing to the completion of tasks and milestones. Each team member is encouraged to take ownership of their roles and collaborate effectively with colleagues. Continuous learning and professional development are emphasized, enabling employees to grow and excel in their careers while delivering high-quality project outcomes.',
    tab: 'secondTab'
  },
  {
    id: 3,
    header: 'HR',
    description:
      'The HR department at Teamplo supports project management by recruiting and retaining top talent. They ensure that the right people are in place to meet project demands. HR is also responsible for creating a positive work environment, offering training programs, and implementing policies that enhance productivity and job satisfaction. By aligning HR strategies with project goals, they help maintain a motivated and capable workforce.',
    tab: 'thirdTab'
  },
  {
    id: 4,
    header: 'Team Leader',
    description:
      'Project Managers at Teamplo are the backbone of project execution. They oversee planning, execution, and closing of projects, ensuring that all phases are completed on time and within budget. Project Managers coordinate resources, manage risks, and communicate with stakeholders to keep everyone informed and engaged. Their leadership and problem-solving skills are crucial for navigating challenges and achieving project success.',
    tab: 'fourthTab'
  }
])
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
const clients = ref([
  {
    id: 1,
    name: 'Aylin Yilmaz',
    header: 'Outstanding Service with Teamplo',
    description:
      'Teamplo has revolutionized our project management. The centralized communication and intuitive interface have boosted our productivity. It feels like having an extra set of hands! ',
    image: generalStore.dir + '/client-1.png',
    bgColor: 'bg-[#FFF9EE]'
  },
  {
    id: 2,
    name: 'Baris Kaya',
    header: 'Tailored Solutions That Drive Success',
    description:
      "Teamplo has transformed our workflow with its transparency and data-driven insights. It's scalable and perfect for growing teams. A fantastic tool!",
    image: generalStore.dir + '/client-1.png',
    bgColor: 'bg-[#E7F5E8]'
  },
  {
    id: 3,
    name: 'Deniz sahin',
    header: 'Customized Excellence in Every Solution',
    description:
      'Teamplo has exceeded our expectations with its seamless integration and customizable dashboards. It’s made team collaboration more efficient. Highly recommended!',
    image: generalStore.dir + '/client-1.png',
    bgColor: 'bg-[#3AA9D026]'
  }
])
</script>
