<template>
  <div>
    <router-link to="/map">Map</router-link>
    <router-link to="/">Home</router-link>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>

</style>