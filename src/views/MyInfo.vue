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
            Hi! I am Seraphine.
          </v-card-title>
        <v-list flat rounded>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group
              v-model="selectedItem"
              color="primary"
          >
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
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
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }
  },
  mounted() {
    setTimeout(function() {
      store.commit('endLoading', 0)
    }, 400)
  },
  destroyed() {
    store.commit('beginLoading', 0)
  },
  methods:{
  },

}
</script>
