<template>
  <div style="height: 612px">
    <div v-if="$store.state.Loading === 1" style="height: 100%">
      <loading/>
      <v-skeleton-loader
          v-bind="attrs"
          height="100%"
          type="card-avatar, article,list-item-three-line, actions"
      ></v-skeleton-loader>
    </div>
    <div v-else >
      <v-img
          height="200px"
          src="@/assets/img/background-1.jpg"
      />
      <v-avatar
          class="elevation-19 mt-n12 d-inline-block "
          style="margin-left: 20px"
          size="90"
      >
        <img
            src="@/assets/img/avatar.jpg"
            alt="John"
        >
      </v-avatar>
      <v-card
          class="mx-auto"
          max-width="300"
          tile
          style="margin-top:10px;height: 360px"
      >

          <v-card-title class="orange--text">
            {{ title}}
          </v-card-title>

<!--          <p>{{ tem }}</p>-->
        <v-list flat rounded>
          <v-subheader>MyInfo</v-subheader>
          <v-list-item-group
              v-model="selectedItem"
          >
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="goto(i)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

      </v-card>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import Loading from "@/components/Loading";
export default {
  name: "MyInfo",
  components: {Loading},
  data () {
    return {
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
      selectedItem: 1,
      title:store.state.title,
      tem:store.state.tem,
      items: [
        { text: 'React-counter', icon: 'mdi-clock' },
        { text: 'jQuery-demo', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-book-open-variant' },
      ],
    }
  },
  mounted() {
    // alert(history.state.vue)
    // console.log(history.state.num)
    setTimeout(function() {
      store.commit('endLoading', 0)
    }, 400)
    // console.log(this.title)
    // console.log(history.state)
    if(history.state.title){
      store.commit('setTitle',history.state.title)
      this.title = history.state.title
    }
    // console.log(history.state)
    // if(history.state.tem){
    //   console.log(history.state.tem)
    //   store.commit('setTemp',history.state.tem)
    //   this.tem = history.state.tem
    // }
    // console.log(this.title)

  },
  destroyed() {
    store.commit('beginLoading', 0)
  },
  methods:{
    goto(i){
      if(window.__POWERED_BY_QIANKUN__) {
        if (i === 0) {
          // console.log(store.state.goods.length)
          // history.pushState(null, '/react', '/react')
          history.pushState({'cartNum': store.state.goods.length}, '/react', '/react')
        } else if (i === 1) {
          history.pushState(null, '/html', '/html')
        }
      }
    }
  },

}
</script>
