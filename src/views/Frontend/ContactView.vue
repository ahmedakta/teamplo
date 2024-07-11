<template>
  <MainLayout>
   
    <!-- Contact Information Section -->
    <section class="py-12">
        <div class="container mx-auto px-4 text-black">
            <h2 class="text-2xl font-bold text-center mb-8">Get in Touch</h2>
            <div class="grid md:grid-cols-2 gap-8 ">
                <!-- Contact Details -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Contact Information</h3>
                    <p class="mb-4">Feel free to get in touch with us via phone or send us a message using the form.</p>
                    <p class="mb-2"><strong>Address:</strong> 1234 Street Name, City, Country</p>
                    <p class="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
                    <p class="mb-2"><strong>Email:</strong> contact@company.com</p>
                    <div class="mt-4">
                        <h4 class="text-lg font-bold mb-2">Follow Us</h4>
                        <div class="flex space-x-3 text-xl">
                            <a href="#" class="text-blue-600 hover:text-blue-800"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="text-blue-400 hover:text-blue-600"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="text-pink-600 hover:text-pink-800"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="text-blue-700 hover:text-blue-900"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <!-- Contact Form -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Send Us a Message</h3>
                    <form class="bg-white rounded-lg p-8 shadow-md">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
                            <input type="text" id="name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name">
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Email">
                        </div>
                        <div class="mb-4">
                            <label for="subject" class="block text-gray-700 font-bold mb-2">Subject</label>
                            <input type="text" id="subject" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Subject">
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea id="message" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">Send Message</button>
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
</script>
