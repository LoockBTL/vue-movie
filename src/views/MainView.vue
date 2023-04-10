<template>
    <h1 class="title">Find a movie</h1>
    <div class="container">
        <div class="search_container">
            <input type="text" v-model="search">
            <button @click="searchFunction">Search</button>
        </div>
        <div class="movies">
            <div v-for="movie in movieList" :key="movie.imdbID">
                <movie-component :Title="movie.Title" :Year="movie.Year" :imdbID="movie.imdbID" :Type="movie.Type"
                    :Poster="movie.Poster">

                </movie-component>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { ISearchReq, IMovieShort } from '../types/movie'

export default {
    name: 'main-view',
    data() {
        return {
            search: '',
            movieList: [] as IMovieShort[]
        }
    },
    methods: {
        searchFunction: async function () {
            try {
                const apiCall: AxiosResponse<ISearchReq> = await axios.get(`https://www.omdbapi.com/?s=${this.search}&page=1&apikey=f989b7e0`)
                this.movieList = apiCall.data.Search
                console.log(apiCall.data.Search)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script> 

<style>
.title {
    text-align: center;
    font-size: 42px;
}

.movies {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.search_container {}
</style>