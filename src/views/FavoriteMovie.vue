<script lang="ts">
import { useFavoriteMovies } from '@/stores/favoriteStore'
import type { IMovieShort, IMovieFull } from '@/types/movie';
import type { AxiosResponse } from 'axios'
import axios from 'axios';


export default {
    data() {
        return {
            movieList: [] as IMovieShort[]
        }
    },
    methods: {
        addAllFavorites: function () {
            const favoriteMovies = useFavoriteMovies()

            const newThis = this
            favoriteMovies.movies.forEach(async function (id) {
                const apiCall: AxiosResponse<IMovieFull> = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=f989b7e0`)
                newThis.movieList.push({ Title: apiCall.data.Title, Year: apiCall.data.Year, imdbID: apiCall.data.imdbID, Type: apiCall.data.Type, Poster: apiCall.data.Poster })
            })
        }
    },
    mounted() {
        this.addAllFavorites()
    }
}
</script>
<template>
    <h1 class="title">List of favorites movies</h1>
    <div class="container">
        <div class="movies">
            <div v-for="movie in movieList" :key="movie.imdbID">
                <movie-component :Title="movie.Title" :Year="movie.Year" :imdbID="movie.imdbID" :Type="movie.Type"
                    :Poster="movie.Poster">
                </movie-component>
            </div>
        </div>
    </div>
</template>
