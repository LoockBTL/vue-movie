import { defineStore } from 'pinia'

export const useFavoriteMovies = defineStore('favoriteMovies', {
  state: () => ({
    movies: [] as string[]
  }),
  actions: {
    addMovie(id: string) {
      this.movies.push(id)
    },
    deleteMovie(id: string) {
      this.movies = this.movies.filter((tag) => tag !== id)
    }
  },
  getters: {
    hasId: (state) => {
      return (id: string): boolean => state.movies.includes(id)
    }
  }
})
