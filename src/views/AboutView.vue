<script setup>
  import { ROUTES } from "@/router/routes";
</script>

<template>
  <div>
    <p>I created this application to learn how to use Vue 3. On the <router-link :to="ROUTES.HOME.path">Home</router-link> page, a random dog image will automatically be loaded on mount. You can add more random images by clicking the button. You can remove a dog image by clicking the image. I used <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a> for state management.</p>
    <p>GitHub Repository: <a href="https://github.com/harryli0088/vue-dog-api" target="_blank">https://github.com/harryli0088/vue-dog-api</a></p>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
</style>