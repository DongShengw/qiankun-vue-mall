import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Loading:1,
    cardIndex:0,
    cardType:'1',
    food:false,
    cardDessertItems: [
      {
        src: require("@/assets/img/dessert-1.jpg"),
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        src: require("@/assets/img/dessert-4.jpg"),
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        src: require("@/assets/img/dessert-6.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
      {
        src: require("@/assets/img/dessert-5.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
      {
        src: require("@/assets/img/dessert-3.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
      {
        src: require("@/assets/img/dessert-2.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
    cardDrinkItems: [
      {
        src: require("@/assets/img/drink-1.jpg"),
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        src: require("@/assets/img/drink-2.jpg"),
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        src: require("@/assets/img/drink-3.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
      {
        src: require("@/assets/img/drink-4.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
      {
        src: require("@/assets/img/drink-5.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
      {
        src: require("@/assets/img/drink-6.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
    cardFruitsItems: [
      {
        src: require("@/assets/img/fruit-1.jpg"),
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        src: require("@/assets/img/fruit-2.jpg"),
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        src: require("@/assets/img/fruit-3.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
      {
        src: require("@/assets/img/fruit-4.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
      {
        src: require("@/assets/img/fruit-5.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
      {
        src: require("@/assets/img/fruit-6.jpg"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
    cardItems:{
      '1':[
        {
          src: require("@/assets/img/dessert-1.jpg"),
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          src: require("@/assets/img/dessert-4.jpg"),
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          src: require("@/assets/img/dessert-6.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/dessert-5.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/dessert-3.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/dessert-2.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
      '2':[
        {
          src: require("@/assets/img/drink-1.jpg"),
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          src: require("@/assets/img/drink-2.jpg"),
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          src: require("@/assets/img/drink-3.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/drink-4.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/drink-5.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/drink-6.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
      '3':[
        {
          src: require("@/assets/img/fruit-1.jpg"),
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          src: require("@/assets/img/fruit-2.jpg"),
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          src: require("@/assets/img/fruit-3.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/fruit-4.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/fruit-5.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/fruit-6.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }
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
    setCardIndex:function (state,value){
      state.cardIndex = value
    },
    setCardType:function (state,value){
      state.cardType = value
    },
    setFood:function (state){
      state.food = !state.food
    },
  },
  actions: {
  },
  modules: {
  }
})
