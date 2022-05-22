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
  </div>
</template>

<script>
import store from "@/store";
import Loading from "@/components/Loading";
export default {
  name: "Music",
  components: {Loading},
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
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
