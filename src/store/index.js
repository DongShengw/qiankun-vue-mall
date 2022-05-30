import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Loading:1,
    cardIndex:0,
    cardType:'1',
    food:false,
    leftValue:false,
    bottomValue: 0,
    cardItems:{
      '1':[
        {
          src: require("@/assets/img/dessert-1.jpg"),
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          src: require("@/assets/img/dessert-4.jpg"),
          title: 'Dessert',
          artist: 'Foster the People',
        },
        {
          src: require("@/assets/img/dessert-6.jpg"),
          title: 'Chocolate',
          artist: 'Ellie Liberty',
        },
        {
          src: require("@/assets/img/dessert-5.jpg"),
          title: 'Ephemeral',
          artist: 'Freedom Goulding',
        },
        {
          src: require("@/assets/img/dessert-3.jpg"),
          title: 'Ephemeral',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/dessert-2.jpg"),
          title: 'Shipshape Cat',
          artist: 'Eternity',
        },
      ],
      '2':[
        {
          src: require("@/assets/img/drink-1.jpg"),
          title: 'Delicacy ',
          artist: 'Foster the People',
        },
        {
          src: require("@/assets/img/drink-2.jpg"),
          title: 'Cool',
          artist: 'Ellie Liberty',
        },
        {
          src: require("@/assets/img/drink-3.jpg"),
          title: 'The end',
          artist: 'Freedom Goulding',
        },
        {
          src: require("@/assets/img/drink-4.jpg"),
          title: 'Eastern Sky',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/drink-5.jpg"),
          title: 'Halcyon Days',
          artist: 'Eternity',
        },
        {
          src: require("@/assets/img/drink-6.jpg"),
          title: 'A Brilliant',
          artist: 'Ellie Goulding',
        },
      ],
      '3':[
        {
          src: require("@/assets/img/fruit-1.jpg"),
          title: 'Sunflower ',
          artist: 'Sun the People',
        },
        {
          src: require("@/assets/img/fruit-2.jpg"),
          title: 'Enthusiasm ',
          artist: 'Foster the People',
        },
        {
          src: require("@/assets/img/fruit-3.jpg"),
          title: 'Sophisticated ',
          artist: 'Bubble',
        },
        {
          src: require("@/assets/img/fruit-4.jpg"),
          title: 'Bliss  Myself',
          artist: 'Ellie Goulding',
        },
        {
          src: require("@/assets/img/fruit-5.jpg"),
          title: 'Halcyon Days',
          artist: 'Butterfly  Goulding',
        },
        {
          src: require("@/assets/img/fruit-6.jpg"),
          title: 'Extravaganza ',
          artist: 'Ellie Goulding',
        },
      ],
    },
    bottomItems:[
      {
        path:'/picture',
        name:'Food',
        icon:'mdi-food'
      },
      {
        path:'/book',
        name:'Cart',
        icon:'mdi-cart'
      },
      {
        path:'/music',
        name:'My',
        icon:'mdi-account'
      },
    ],
    goods:[
        {type:"1",id:0},
        {type:"1",id:1},
        {type:"1",id:2},
        {type:"1",id:3},
    ],
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
    setBottomValue:function (state,value){
      state.bottomValue = value
    },
    setLeftValue:function (state){
      state.leftValue = ! state.leftValue
    },
    pushGoods:function (state,value){
      state.goods.push(value)
    },
    removeGoods:function (state,value){
      state.goods = state.goods.filter(item => JSON.stringify(item) !== JSON.stringify(value))
    }
  },
  actions: {
  },
  modules: {
  }
})
