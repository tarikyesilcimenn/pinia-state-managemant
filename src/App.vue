<script>
import { useMoviesStore } from "./stores/movies";
import { ref, reactive, watch, computed } from "vue";
import AddFilmModal from "./components/AddFilmModal.vue";
import MovieList from "./components/MovieList.vue";
export default {
  components: {
    AddFilmModal,
    MovieList,
  },
  setup() {
    const moviesStore = useMoviesStore();
    const isModalOpen = computed(() => moviesStore.isAddModalOpen);
    const moviesLength = computed(() => moviesStore.isMoviesLength);
    const openAddMovieModal = () => {
      moviesStore.isAddModalOpen = true;
    };

    watch(isModalOpen, (newVal, oldVal) => {
      console.log(newVal, oldVal, "isModalOpen");
    });

    return { moviesStore, isModalOpen, openAddMovieModal, moviesLength };
  },
};
</script>

<template>
  <div class="body">
    <div class="nav">
      <div>Aktif Listeli {{ moviesLength }} film bulunmaktadır</div>
      <button class="addMovie" @click="openAddMovieModal">Film Ekle</button>
    </div>
    <MovieList />
  <AddFilmModal :isOpen="isModalOpen" />
  </div>
</template>

<style>
body {
  margin: 0 !important;
  padding: 0 !important;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: white;
}
.body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  background-image: url("./assets/green-circle.svg");
  background-repeat: no-repeat;
  background-position: left bottom;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.addMovie {
  padding: 10px 15px;
  color: white;
  background-color: rgb(66, 216, 106);
  border: 0;
  border-radius: 12px;
}
</style>
