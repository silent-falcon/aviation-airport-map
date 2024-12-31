<template>
  <div class="p-3 h-screen grid grid-rows-[15%_85%] overflow-hidden">
    <!-- Navbar (top row, 20%) -->
    <div
      class="flex items-center justify-between bg-sf-primary text-sf-secondary px-4"
    >
      <Navbar />
    </div>

    <!-- Router-view (bottom row, 80%) -->
    <div class="flex flex-col bg-gray-100">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from "./components/navbar.vue";
</script>
