<script>
import { useMoviesStore } from "../stores/movies";
import { watch, computed, reactive, ref } from "vue";
export default {
  props: ["isOpen"],
  setup() {
    const store = useMoviesStore();
    const isModalOpen = computed(() => store.isAddModalOpen);
    const currentBannerUrl = ref("");
    const currentMovieName = ref("");

    const newMovie = reactive({ id: 3, bannerUrl: "", movieName: "" });

    const closeModal = () => {
      store.isAddModalOpen = false;
    };

    const saveMovie = () => {
      store.movies.push({id: store.movies.length+1, bannerUrl: currentBannerUrl.value, movieName: currentMovieName.value})
      console.log(store.movies, 'tarıkk')
    };
    watch(currentMovieName, (newVal, oldVal) => {
        console.log(newVal, oldVal, 'tarık')
    } )

    return {
      closeModal,
      newMovie,
      saveMovie,
      currentMovieName,
      currentBannerUrl,
    };
  },
};
</script>

<template>
  <div v-if="isOpen" class="modal">
    <div class="box">
      <label for="">Banner Url: </label>
      <input type="text" v-model="currentBannerUrl" />
    </div>
    <div class="box">
      <label for="">Movie Name: </label>
      <input type="text" v-model="currentMovieName" />
    </div>
    <div class="modal-footer">
      <button @click="closeModal">Close</button>
      <button @click="saveMovie">Save</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;

  background: white;
  color: rgb(255, 255, 255);
  width: 25%;
  padding: 1em;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);

  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
}
.box {
  display: flex;
  flex-direction: row;
  color: black;
}
.modal-footer {
  display: flex;
  flex-direction: row;
  color: black;
}
</style>