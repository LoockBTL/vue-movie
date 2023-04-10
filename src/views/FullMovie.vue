<script lang="ts">
import type { AxiosResponse } from 'axios'
import type { IMovieFull } from '@/types/movie';
import axios from 'axios';
import { useFavoriteMovies } from '@/stores/favoriteStore'


export default {

    name: 'full-movie',
    data() {
        return {
            movie: {} as IMovieFull,
            favorite: false as boolean
        }
    },
    methods: {
        getInfo: async function () {
            try {
                const apiCall: AxiosResponse<IMovieFull> = await axios.get(`https://www.omdbapi.com/?i=${this.$route.params.id}&apikey=f989b7e0`)
                this.movie = { ...apiCall.data }
            } catch (error) {
                console.log(error)
            }
        },
        checkForFavorite: function () {
            const favoriteMovies = useFavoriteMovies()

            const id = this.$route.params.id ? this.$route.params.id.toString() : 'nothing'
            if (favoriteMovies.hasId(id)) {
                this.favorite = true
            }
        },
        workWithFavorite: function () {
            const favoriteMovies = useFavoriteMovies()

            const id = this.$route.params.id ? this.$route.params.id.toString() : 'nothing'
            if (favoriteMovies.hasId(id)) {
                favoriteMovies.deleteMovie(id)
                this.favorite = false
            } else {
                favoriteMovies.addMovie(id)
                this.favorite = true
            }
            console.log(favoriteMovies.movies)
        }
    },
    mounted() {
        this.getInfo()
        this.checkForFavorite()
    }
}
</script>
<template>
    <div class="container">
        <div class="full_container">
            <div>
                <img :src=movie.Poster alt="" class="full_poster">
                <div><button @click="workWithFavorite">{{ favorite ? 'Delete from favorite' : 'Add ro favorite' }}</button>
                </div>
            </div>
            <div class="full_info">
                <h2>{{ movie.Title }}</h2>
                <p><strong>Year</strong>: {{ movie.Year }}</p>
                <p><strong>Rated</strong> {{ movie.Rated }}</p>
                <p><strong>Released</strong>: {{ movie.Released }}</p>
                <p><strong>DVD</strong>: {{ movie.DVD }}</p>
                <p><strong>Box Office</strong>: {{ movie.BoxOffice }}</p>
                <p><strong>Type</strong>: {{ movie.Type }}</p>
                <p><strong>Runtime</strong>: {{ movie.Runtime }}</p>
                <p><strong>Genre</strong>: {{ movie.Genre }}</p>
                <p><strong>Director</strong>: {{ movie.Director }}</p>
                <p><strong>Writter</strong>: {{ movie.Writer }}</p>
                <p><strong>Actors</strong>: {{ movie.Actors }}</p>
                <p><strong>Plot</strong>: {{ movie.Plot }}</p>
                <p><strong>Language</strong>: {{ movie.Language }}</p>
                <p><strong>County</strong>: {{ movie.Country }}</p>
                <p><strong>Awards</strong>: {{ movie.Awards }}</p>
            </div>
            <div>
                <div v-for="rating in movie.Ratings" :key="rating.Source">
                    {{ rating.Source }} | {{ rating.Value }}
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.full_container {
    margin-top: 50px;
    display: flex;
}

.full_info {
    margin-left: 20px;
}

.full_info h2 {
    text-align: center;
}

.full_poster {
    height: 50vh;
}
</style>

