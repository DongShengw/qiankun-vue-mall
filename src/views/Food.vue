<template>
  <div style="height: 667px;position: absolute" >
    <v-hover v-slot="{ hover }" >
      <v-card
          class="mx-auto"
          transition="fade-transition"
          color="grey lighten-4"
          v-touch="{
            down: () => back(),
            // right: () => swipe('Right'),
            // up: () => swipe('Up'),
            // down: () => swipe('Down'),
          }"
          outlined
          max-width="100%"
          height="100%"
      >
        <v-img
            :aspect-ratio="16/9"
            :src="$store.state.cardItems[type][id]"
        >
        </v-img>
        <v-card-text
            class="pt-6"
            style="position: relative;"
        >
          <div>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    absolute
                    :loading="loading"
                    :disabled="loading"
                    @click="loader = 'loading'"
                    color="#FFA726"
                    class="white--text"
                    fab
                    large
                    right
                    top
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </div>

          <div class="font-weight-light grey--text text-h6 mb-2">
            For the perfect meal
          </div>
          <h3 class="text-h4 font-weight-light orange--text mb-2">
            Delicious Food Me
          </h3>
          <div class="font-weight-light text-h6 mb-2">
            Our Vintage kitchen utensils delight any chef.<br>
            Made of bamboo by hand
          </div>
        </v-card-text>
        <v-timeline
            align-top
            dense
            style="position: absolute;margin-left: 130px"
        >
          <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
          >
            <div>
              <div class="font-weight-normal">
                <strong>{{ message.time }}</strong>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
        <v-btn
            absolute
            color="#FF6F00"
            class="white--text"
            fab
            large
            @click="toCart"
            style="margin-left: 35px;margin-top: 130px"
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-card>
    </v-hover>
    <v-snackbar
        elevation="18"
        top
        rounded="rounded lg"
        v-model="snackbar"
        color="#4CAF50"
        timeout="700"
        text
        style="text-align:center"
    >
      <v-icon color="success">mdi-check-circle</v-icon>
      添加成功
    </v-snackbar>
  </div>
</template>

<script>
import store from "@/store/index.js"
export default {
  name: "Food",
  data(){
    return{
      snackbar:false,
      type:'1',
      id:0,
      loader: null,
      loading: false,
      messages: [
        {
          time: '9:47',
          color: 'deep-purple lighten-1',
        },
        {
          time: '10:37',
          color: 'orange',
        },
        {
          time: '12:12',
          color: 'success',
        },
      ],
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout( () =>(this[l] = false), 600)
      setTimeout( () =>(this.snackbar=true), 600)

      this.loader = null
      this.snackbar=false


    },
  },
  methods:{
    back(){
      store.commit('setFood')
      // console.log(store.state.food)
    },
    toCart(){
      this.back()
      store.commit('setBottomValue',1)
    }
  },
  beforeMount() {
    this.type=store.state.cardType
    this.id=store.state.cardIndex
  },
  destroyed() {
    store.commit('pushGoods',{type:this.type,id:this.id})
  }
}
</script>

<style scoped>
/*.v-card--reveal {*/
/*  align-items: center;*/
/*  bottom: -10px;*/
/*  justify-content: center;*/
/*  opacity: 1;*/
/*  position: absolute;*/
/*  width: 100%;*/
/*}*/
</style>
