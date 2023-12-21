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
      store.movies.push({
        id: store.movies.length + 1,
        bannerUrl: currentBannerUrl.value,
        movieName: currentMovieName.value,
      });
      console.log(store.movies, "tarıkk");
    };
    watch(currentMovieName, (newVal, oldVal) => {
      console.log(newVal, oldVal, "tarık");
    });

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
  <div v-show="isOpen" class="modal">
    <div class="box">
      <label for="">Banner Url: </label>
      <input type="text" v-model="currentBannerUrl" />
    </div>
    <div class="box">
      <label for="">Movie Name: </label>
      <input type="text" v-model="currentMovieName" />
    </div>
    <div class="modal-footer">
      <button class="cancel" @click="closeModal">Cancel</button>
      <button class="save" @click="saveMovie">Save</button>
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
  border-radius: 12px;
}
.modal input {
  min-height: 18px;
  border-radius: 6px;
  border: 1px solid #ced4da;
}
input:focus {
  border: 1px solid #80bdff !important;
}
 input:focus-visible {
  border: 1px solid #80bdff !important;

}
.box {
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: center;
}
.box label {
  min-width: 90px !important;
}
.modal-footer {
  display: flex;
  flex-direction: row;
  justify-content: end;
  color: black;
  margin-top: 20px;
}
button {
  padding: 5px 10px;
  border-radius: 6px;
  color: white;
  border: 1px solid #ced4da;
  min-width: 90px;
}
.save{
  background-color: #80bdff;
}
.cancel{
  background-color: rgb(255, 83, 83);
}
</style>