<template>
  <div style="height: 667px;position: absolute">
    <v-hover v-slot="{ hover }">
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
                    color="orange"
                    class="white--text"
                    fab
                    large
                    right
                    top
                >
                  <v-icon>mdi-cart</v-icon>
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

      </v-card>
    </v-hover>
    <v-snackbar
        light
        outlined
        width="100"
        :timeout="700"
        elevation="18"
        color="#EF5350"
        v-model="snackbar"
    >
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
    }
  },
  beforeMount() {
    this.type=store.state.cardType
    this.id=store.state.cardIndex
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
