import { defineStore } from 'pinia'

type DogApiState = {
  error: Error | null,
  imgs: string[],
  loading: boolean,
}

export const useDogApiStore = defineStore<string,DogApiState>({
  id: 'dogApi',
  state: () => ({
    error: null,
    imgs: [],
    loading: false,
  } as DogApiState),
  getters: {
  }, 
  actions: {
    async fetchRandomImg() {
      this.loading = true
      try {
        this.imgs.unshift(
          await fetch(`https://dog.ceo/api/breeds/image/random`)
          .then((response) => response.json())
          .then((data: {message:string, status: string}) => data.message)
        )
      } catch (error) {
        this.error = error as Error
      } finally {
        this.loading = false
      }
    },
    removeImg(idx: number) {
      this.imgs.splice(idx, 1)
    }
  }
})