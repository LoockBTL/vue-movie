<template>
    <div class="movie_container">
        <img :src=Poster :alt=imdbID class="small_pic">
        <div>
            <h2>{{ Title }}</h2>
            <p>Year: {{ Year }}</p>
            <p>Type: {{ Type }}</p>
            <button @click="pushToMain">Watch more</button>
        </div>
    </div>
</template>

<style>
.movie_container {
    display: flex;
    margin: 5px;
    background-color: rgb(44, 44, 44);
    padding: 30px;
    border: 5px solid black;
    border-radius: 20px;
    color: white;
}

.small_pic {
    width: 10vw;
    margin-right: 10px;
}
</style>

<script lang="ts">
export default {
    name: 'movie-component',
    props: {
        Title: {
            type: String,
            required: true
        },
        Year: {
            type: String,
            required: true
        },
        imdbID: {
            type: String,
            required: true
        },
        Type: {
            type: String,
            required: true
        },
        Poster: {
            type: String,
            required: true
        }
    },
    methods: {
        pushToMain() {
            this.$router.push({ name: 'full-movie', params: { id: `${this.imdbID}` } })
        }
    }
}
</script>