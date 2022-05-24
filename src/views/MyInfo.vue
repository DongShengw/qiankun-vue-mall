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
    <v-container v-else fluid>
      <v-card class="mt-4 text-center">
        <v-img
            class="rounded-circle elevation-6 mt-n12 d-inline-block"
            src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            width="128"
        />

        <v-card-text class="text-center">
          <h6 class="text-h6 mb-2 text--secondary">
            CEO / FOUNDER
          </h6>

          <h4 class="text-h4 mb-3 text--primary">
            John Leider
          </h4>

          <p class="text--secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta?
          </p>

          <v-btn
              class="mr-0"
              color="primary"
              min-width="100"
              rounded
          >
            Follow
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
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
