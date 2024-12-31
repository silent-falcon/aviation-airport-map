<script setup>
import { ref } from "vue";

// Reactive state
const message = "Hello, Script Setup!";
const count = ref(0);

// Methods
const increment = () => {
  count.value++;
};
</script>

<template>
  <main>
    <div>
      <h1>{{ message }}</h1>
      <button @click="increment" class="button">Click Me: {{ count }}</button>
    </div>
  </main>
</template>
