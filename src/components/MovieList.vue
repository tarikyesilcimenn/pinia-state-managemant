<template>
  <div class="flex" >
    <div class="films" v-for="item in movies" :key="item">
        <img :src="item.bannerUrl"  width="200" height="400"/>
        <p>{{item.movieName}}</p>
    </div>
  </div>
</template>

<script>
import { computed,watch } from 'vue'
import {useMoviesStore} from "../stores/movies"
export default {
    setup(){
        const store = useMoviesStore()
        const movies = computed(() => store.movies)
        watch(movies,(newVal, oldVal) => {
            movies = newVal
        })
        return{movies}
    }
}
</script>

<style>
.flex{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.films{
    margin: 20px;
}
</style>