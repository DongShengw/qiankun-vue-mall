<template>
  <v-app>
    <div style="height: 612px">
      <div v-if="value === 0" v-show="$store.state.food === false" style="height: 612px" >
        <v-card  class="overflow-hidden">
          <v-app-bar
              absolute
              color="#3949AB"
              dark
              shrink-on-scroll
              prominent
              src="@/assets/img/home_background.jpg"
              scroll-target="#scrolling-techniques-3"
          >
            <template v-slot:img="{ props }">
              <v-img
                  v-bind="props"
                  gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
              ></v-img>
            </template>

            <v-app-bar-nav-icon style="margin-top: 10px"></v-app-bar-nav-icon>
<!--            <v-text-field-->
<!--                label="搜索"-->
<!--                style="margin-left: 15px"-->
<!--                placeholder="Start typing to Search"-->
<!--            >-->
<!--              <v-btn icon slot="append">-->
<!--                <v-icon >mdi-magnify</v-icon>-->
<!--              </v-btn>-->
<!--            </v-text-field>-->
            <!--          <v-app-bar-title>Title</v-app-bar-title>-->

            <v-spacer></v-spacer>

            <!--          <v-btn icon style="margin-top: 10px">-->
            <!--            <v-icon>mdi-heart</v-icon>-->
            <!--          </v-btn>-->

<!--            <v-btn icon style="margin-top: 10px">-->
<!--              <v-icon>mdi-dots-vertical</v-icon>-->
<!--            </v-btn>-->

            <template v-slot:extension>
              <v-tabs
                  v-model="tab"
                  align-with-title
              >
                <v-tabs-slider color="#FFEB3B"></v-tabs-slider>
                <v-tab>甜点</v-tab>
                <v-tab>饮品</v-tab>
                <v-tab>水果</v-tab>
              </v-tabs>
            </template>
          </v-app-bar>
          <v-sheet
              id="scrolling-techniques-3"
              class="overflow-y-auto"
              max-height="612px"
          >
            <v-container class="container" fluid>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-row dense>
                    <v-col
                        v-for="(item, i) in cardDessertItems"
                        :key="i"
                        cols="12"
                    >
                      <v-card
                          ripple
                          class="rounded-xl"
                          :img=item.src
                          @click="toFood(i,1)"
                          dark
                      >
                        <div class="d-flex flex-no-wrap justify-space-between">
                          <div>
                            <v-card-title
                                class="text-h5"
                                v-text="item.title"
                            ></v-card-title>

                            <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                            <v-card-actions>
                              <v-btn
                                  v-if="item.artist === 'Ellie Goulding'"
                                  class="ml-2 mt-3"
                                  fab
                                  icon
                                  height="40px"
                                  right
                                  width="40px"
                              >
                                <v-icon>mdi-play</v-icon>
                              </v-btn>

                              <v-btn
                                  v-else
                                  class="ml-2 mt-5"
                                  outlined
                                  rounded
                                  small
                              >
                                START RADIO
                              </v-btn>
                            </v-card-actions>
                          </div>

                          <!--                        <v-avatar-->
                          <!--                            class="ma-3"-->
                          <!--                            size="125"-->
                          <!--                            tile-->
                          <!--                        >-->
                          <!--                          <v-img :src="item.src"></v-img>-->
                          <!--                        </v-avatar>-->
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-tab-item>

                <v-tab-item>
                  <v-row dense>
                    <v-col
                        v-for="(item, i) in cardDrinkItems"
                        :key="i"
                        cols="12"
                    >
                      <v-card
                          v      ripple
                          class="rounded-xl"
                          :img=item.src
                          @click="toFood(i,2)"
                          dark
                      >
                        <div class="d-flex flex-no-wrap justify-space-between">
                          <div>
                            <v-card-title
                                class="text-h5"
                                v-text="item.title"
                            ></v-card-title>

                            <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                            <v-card-actions>
                              <v-btn
                                  v-if="item.artist === 'Ellie Goulding'"
                                  class="ml-2 mt-3"
                                  fab
                                  icon
                                  height="40px"
                                  right
                                  width="40px"
                              >
                                <v-icon>mdi-play</v-icon>
                              </v-btn>

                              <v-btn
                                  v-else
                                  class="ml-2 mt-5"
                                  outlined
                                  rounded
                                  small
                              >
                                START RADIO
                              </v-btn>
                            </v-card-actions>
                          </div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-tab-item>

                <v-tab-item>
                  <v-row dense>
                    <v-col
                        v-for="(item, i) in cardFruitsItems"
                        :key="i"
                        cols="12"
                    >
                      <v-card
                          ripple
                          class="rounded-xl"
                          :img=item.src
                          @click="toFood(i,3)"
                          dark
                      >
                        <div class="d-flex flex-no-wrap justify-space-between">
                          <div>
                            <v-card-title
                                class="text-h5"
                                v-text="item.title"
                            ></v-card-title>

                            <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                            <v-card-actions>
                              <v-btn
                                  v-if="item.artist === 'Ellie Goulding'"
                                  class="ml-2 mt-3"
                                  fab
                                  icon
                                  height="40px"
                                  right
                                  width="40px"
                              >
                                <v-icon>mdi-play</v-icon>
                              </v-btn>

                              <v-btn
                                  v-else-if="i%3 ===0"
                                  class="ml-2 mt-5"
                                  outlined
                                  rounded
                                  small
                              >
                                START RADIO
                              </v-btn>

                              <v-btn
                                  v-else
                                  :class="fav ? 'red--text' : ''"
                                  icon
                                  @click="fav = !fav"
                              >
                                <v-icon>mdi-heart</v-icon>
                              </v-btn>
                            </v-card-actions>
                          </div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-tab-item>
              </v-tabs-items>
            </v-container>
          </v-sheet>
        </v-card>
      </div>

      <div v-if="value === 1">
        <cart/>
      </div>

      <div v-if="value === 2">
        <my-info/>
      </div>

      <div  v-if="$store.state.food === true">
        <food/>
      </div>
    </div>

    <v-bottom-navigation
        v-model="value"
        v-show="$store.state.food === false"
        background-color="#E57373"
        dark
        shift
    >
      <v-btn v-for="(item,index) in bottomItems" :key="index" >
        <span>{{item.name}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-main>
    </v-main>
  </v-app>
</template>

<script>

import store from "@/store/index.js"
import Cart from "@/views/Cart";
import MyInfo from "@/views/MyInfo";
import Food from "@/views/Food";

export default {
  name: 'App',
  components: {Cart, MyInfo,Food},
  data() {
    return {
      cardDessertItems: store.state.cardDessertItems,
      cardDrinkItems: store.state.cardDrinkItems,
      cardFruitsItems: store.state.cardFruitsItems,
      bottomItems:[
        {
          path:'/picture',
          name:'美图',
          icon:'mdi-image'
        },
        {
          path:'/book',
          name:'笔记',
          icon:'mdi-book'
        },
        {
          path:'/music',
          name:'音乐',
          icon:'mdi-music-note'
        },
      ],
      tab: null,
      value:'',
      fav:false
      }
  },
  computed:{
  },
  methods:{
    toFood(index,type){
      store.commit('setFood')
      store.commit('setCardType', type)
      store.commit('setCardIndex', index)
      // console.log(store.state.cardType)
      // console.log(store.state.cardIndex)

    }
  }
};
</script>

<style lang="less" scoped>
.container{
  height: 985px;
  margin-top: 230px;
  overflow-y: hidden;
}
</style>
