<template>
  <footer class="flex-col">
    <!-- links -->
    <div
      class="text-center text-black w-[35rem] justify-between max-w-screen-xl px-4 pt-10 mx-auto lg:pt-18 flex"
    >
      <a href="/" class="hover:text-[#5dade2]">Home</a>
      <a href="/about-us" class="hover:text-[#5dade2]">About Us</a>
      <a href="/features" class="hover:text-[#5dade2]">Features</a>
      <a href="/contact-us" class="hover:text-[#5dade2]">Contact Us</a>
      <a href="/faq" class="hover:text-[#5dade2]">FAQ</a>
    </div>
    <!-- privacy section -->
    <div
      class="bg-[#0F7EA6] text-white rounded text-center m-10 p-7 pl-20 pr-20 h-[5rem] flex justify-between"
    >
      <span><a href="">Privacy Policy</a></span>
      <!-- All RIghts Reserved -->
      <p>© 2024 All rights reserved</p>
      <!-- social media -->
      <span class="text-[1.3rem]">
        <a href=""><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        <a href="" class="pl-3"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
      </span>
    </div>
  </footer>
</template>

<script setup></script>
