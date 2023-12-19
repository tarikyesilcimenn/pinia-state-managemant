<script>
import { useMoviesStore } from "./stores/movies";
import { ref, reactive, watch, computed } from "vue";
import AddFilmModal from "./components/AddFilmModal.vue";
import MovieList from './components/MovieList.vue';

export default {
  components: {
    AddFilmModal,
    MovieList
  },
  setup() {
    const moviesStore = useMoviesStore();
    const isModalOpen = computed(() => moviesStore.isAddModalOpen);
    const openAddMovieModal = () => {
      moviesStore.isAddModalOpen = true
    }

    watch(isModalOpen, (newVal, oldVal) => {
      console.log(newVal, oldVal, 'isModalOpen')
    })

    return { moviesStore, isModalOpen, openAddMovieModal };
  },
};
</script>

<template>
  <div class="body">
    <div class="nav">
      <button class="addMovie" @click="openAddMovieModal">Film Ekle</button>
    </div>
    <AddFilmModal :isOpen="isModalOpen"/>
    <MovieList />

  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  background-color: grey;
  min-height: 100vh;
}
.nav {
  display: flex;
  justify-content: end;
}
.addMovie {
  padding: 10px 15px;
  color: white;
  background-color: rgb(71, 242, 117);
  border: 0;
  border-radius: 12px;
}
</style>
