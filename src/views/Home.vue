<template>
  <v-app>

    <div v-if="value === 0" style="height: 612px" >
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
          <v-text-field
              label="搜索"
              style="margin-left: 15px"
              placeholder="Start typing to Search"
          >
            <v-btn icon slot="append">
              <v-icon >mdi-magnify</v-icon>
            </v-btn>
          </v-text-field>
          <!--          <v-app-bar-title>Title</v-app-bar-title>-->

          <v-spacer></v-spacer>

          <!--          <v-btn icon style="margin-top: 10px">-->
          <!--            <v-icon>mdi-heart</v-icon>-->
          <!--          </v-btn>-->

          <v-btn icon style="margin-top: 10px">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs
                v-model="tab"
                align-with-title
            >
              <v-tabs-slider color="#FFEB3B"></v-tabs-slider>
              <v-tab>Tab 1</v-tab>
              <v-tab>Tab 2</v-tab>
              <v-tab>Tab 3</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-sheet
            id="scrolling-techniques-3"
            class="overflow-y-auto"
            max-height="612px"
        >
          <v-container style="height: 1000px;margin-top: 230px">
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-row dense>
                  <v-col
                      v-for="(item, i) in cardItems"
                      :key="i"
                      cols="12"
                  >
                    <v-card
                        :color="item.color"
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

                        <v-avatar
                            class="ma-3"
                            size="125"
                            tile
                        >
                          <v-img :src="item.src"></v-img>
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text v-text="text"></v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text v-text="text"></v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-container>
        </v-sheet>
      </v-card>
    </div>
    <div v-if="value === 1">
      <book/>
    </div>
    <v-bottom-navigation
        v-model="value"
        background-color="#E57373"
        dark
        shift
    >
      <v-btn v-for="(item,index) in bottomItems" :key="index" @click="goto(item.path)">
        <span>{{item.name}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-main>
    </v-main>
  </v-app>
</template>

<script>

import Book from "@/views/Book";
export default {
  name: 'App',
  components: {Book},
  data() {
    return {
      cardItems: [
        {
          color: '#4CAF50',
          src: require("@/assets/img/dog1.jpg"),
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#E64A19',
          src: require("@/assets/img/dog6.jpg"),
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#FFA000',
          src: require("@/assets/img/cat1.jpg"),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
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
      tab_items: [
        'web', 'shopping', 'videos', 'images', 'news',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
  computed:{
  },
  methods:{
    goto(path){
      // this.$router.push(path)
    }
  }
};
</script>

<style lang="less" scoped>

</style>
