<template>
  <div class="d-flex flex-column min-vh-100 bg">

    <div class="flex-grow-1">
      <RouterView></RouterView>
    </div>

    <Footer></Footer>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/layout/Footer.vue'
</script>

<style scoped>
.bg{
  background-image: url("./assets/bg1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
