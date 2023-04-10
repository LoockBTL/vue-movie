<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './style/normalize.css'
</script>

<template>
  <header>
    <div class="wrapper">

      <nav class="container">
        <RouterLink to="/" class="link">Search</RouterLink>
        <RouterLink to="/favorite" class="link">Favorite</RouterLink>
      </nav>

    </div>
  </header>
  <RouterView />

</template>

<style>
body{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.wrapper{
  padding: 10px;
  background-color: black;
  color: white;
}
.container{
  width: 80vw;
  margin: 0 auto;
}
.link{
  font-size: 24px;
  text-decoration: none;
  color: white;
  margin-right: 20px;
}
</style>