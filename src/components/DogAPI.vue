<script>
  import { storeToRefs } from 'pinia'
  import { useDogApiStore } from '../stores/dogApi'

  export default {
    setup() {
      const { error, imgs, loading,  } = storeToRefs(useDogApiStore())
      const { fetchRandomImg, removeImg } = useDogApiStore()
      return { error, fetchRandomImg, imgs, loading, removeImg }
    },
    mounted() {
      if (this.imgs.length === 0) {
        this.fetchRandomImg()
      }
    }
  }
</script>

<template>
  <main>
    <br/>
    <div><button @click="fetchRandomImg()">Add Another Dog!</button></div>
    <p v-if="loading">Loading random image...</p>
    <p v-if="error">{{ error.message }}</p>
    
    <br/>
    <div v-if="imgs">
      <img v-for="(img, idx) in imgs" :key="img" :src="img" alt="random dog image" @click="removeImg(idx)"/>
    </div>
  </main>
</template>

<style scoped>
  main {
    text-align: center;
  }

  img {
    width: 100%;
  }
</style>
