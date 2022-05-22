import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Loading:1
  },
  getters: {
    Loading:(state) => state.Loading
  },
  mutations: {
    beginLoading:function (){
      this.state.Loading = 1
    },
    endLoading: function (){
      this.state.Loading = 0
    },
  },
  actions: {
  },
  modules: {
  }
})
