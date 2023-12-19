<template>
  <div class="flex" >
      <div class="films" v-for="item in movies" :key="item">
        <div class="deleteFilm" @click="remove(item.id)">X</div>
        <img :src="item.bannerUrl"  width="200" height="400"/>
        <p>{{item.movieName}}</p>
    </div>
  </div>
</template>

<script>
import { computed,toRaw,watch } from 'vue'
import {useMoviesStore} from "../stores/movies"
export default {
    setup(){
        const store = useMoviesStore()
        const movies = computed(() => store.movies)

        

        const remove = (id) => {
            // store.movies = store.movies.filter((i) => i.id !== id)
            store.removeMovie(id)
        }

        watch(movies,(newVal, oldVal) => {
            store.movies = newVal
        })
        return{movies, remove, store}
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
.deleteFilm{
    background-color: rgb(253, 59, 59);
    border-radius: 20px;
    height: 20px;
    color: white;
    font-weight: 600;
    font-family: 'Courier New', Courier, monospace;
    padding: 5px;
    position: absolute;
}
</style>