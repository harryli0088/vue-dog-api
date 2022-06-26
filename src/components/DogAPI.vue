<script>
  import { storeToRefs } from 'pinia'
  import { useDogApiStore } from '../stores/dogApi'

  export default {
    setup() {
      const { error, imgs, loading,  } = storeToRefs(useDogApiStore())
      const { fetchRandomImg } = useDogApiStore()
      return { error, fetchRandomImg, imgs, loading }
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
      <img v-for="img in imgs" :key="img" :src="img" alt="random dog image"/>
    </div>
  </main>
</template>

<style scoped>
  main {
    text-align: center;
  }

  img {
    width: 500px;
  }
</style>
