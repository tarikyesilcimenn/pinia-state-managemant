import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', {
  state:() => (  {
    movies: [{
      id:0,
      bannerUrl: "https://www.arttablo.com/upload/U-thor-film-afisi-sinema-kanvas-tablo1527774573-800.jpg",
      movieName: "Thor"
    },{
      id:1,
      bannerUrl: "https://cdn.dsmcdn.com/ty79/product/media/images/20210301/11/67631570/147063869/0/0_org_zoom.jpg",
      movieName: "Titanic"
    }
  ],
    isAddModalOpen: false
  }),
  getters:{
    isMoviesLength: (state) => {
      return state.movies.length
    }
  },
  actions:{
    removeMovie(id){
      this.movies = this.movies.filter((item) => item.id !== id)
    }
  }
  

})
