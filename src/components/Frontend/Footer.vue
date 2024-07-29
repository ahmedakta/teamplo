<template>
  <footer class="flex flex-col items-center">
    <!-- privacy section -->
    <div
      class="bg-[#3AA9D0] text-white rounded text-center m-10 p-7 h-auto w-full max-w-screen-xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
    >
      <span><a href="" class="hover:text-[#5dade2]">Privacy Policy</a></span>
      <!-- All Rights Reserved -->
      <p>© 2024 All rights reserved</p>
      <!-- social media -->
      <span class="text-[1.3rem] flex space-x-3">
        <a href="" class="hover:text-[#5dade2]"
          ><font-awesome-icon :icon="['fab', 'facebook']"
        /></a>
        <a href="" class="hover:text-[#5dade2]"
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></a>
      </span>
    </div>
  </footer>
</template>

<script setup></script>
