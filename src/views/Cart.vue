<template>
  <Loading v-if="$store.state.Loading === 1"/>
  <div v-else-if="$store.state.Loading === 0" style="height: 612px">
    <v-card
        height="100%"
    >
      <v-app-bar
          absolute
          color="deep-purple accent-4"
          dark
          scroll-target="#scrolling-techniques-6"
      >
        <v-icon>mdi-cart</v-icon>

        <v-spacer></v-spacer>

        <v-toolbar-title>  Collapsing Bar</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-checkbox
            v-model="collapseOnScroll"
            color="white"
            hide-details
        ></v-checkbox>
      </v-app-bar>
      <v-sheet
          id="scrolling-techniques-6"
          class="overflow-y-auto"
          max-height="612px"
      >
        <v-container fluid style="margin-top:55px; height: 612px;">
          <v-row >
            <v-col
                v-for="(item,index) in $store.state.goods"
                :key="index"
                cols="12"
                style="overflow-y: hidden;white-space: nowrap;"
            >
              <v-card
                  rounded="rounded lg"
                  height="110px"
              >
                <v-checkbox
                    v-model="checkbox"
                    style="position: absolute;margin:40px 15px"
                ></v-checkbox>
                  <v-img
                      :aspect-ratio="1"
                      width="90px"
                      :src="$store.state.cardItems[item.type][item.id]"
                      style="position: absolute;margin-left: 50px;margin-top: 10px"
                  ></v-img>

              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

    </v-card>
    <v-btn
        absolute
        color="error"
        class="white--text"
        fab
        large
        @click="remove"
        style="margin-left: 285px;margin-top: -100px"
    >
      <v-icon>mdi-minus</v-icon>
    </v-btn>
  </div>
</template>

<script>

import Loading from "@/components/Loading";
import store from "@/store";

export default {
  name: "Cart",
  components: {Loading},
  data(){
    return{
      collapseOnScroll: true,
      checkbox:false,
    }
  },
  methods:{
    remove(){

    }
  },
  mounted() {
    setTimeout(function() {
      store.commit('endLoading', 0)
    }, 300)
  },
  destroyed() {
    store.commit('beginLoading', 0)
  },
}
</script>

<style scoped>

</style>
