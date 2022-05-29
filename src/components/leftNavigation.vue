<template>
  <v-navigation-drawer
      v-model="$store.state.leftValue"
      absolute
      temporary
      dark
      style="background: #f5f5f5"
      src="@/assets/img/left-4.jpg"
  >
    <v-list-item>
      <v-list-item-avatar size="80" @click="toMyInfo">
        <v-img src="@/assets/img/avatar.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content >
        <v-list-item-title >Seraphine</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
      >
        <v-list-item-icon >
          <v-icon size="25">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="font-size: 15px">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
import store from "@/store/index.js"

export default {
  name: "leftNavigation",
  data(){
    return{
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'Info', icon: 'mdi-account-box-multiple-outline' },
        { title: 'Account', icon: 'mdi-bookmark' },
        { title: 'Set', icon: 'mdi-cloud-upload' },
      ],
    }
  },
  methods:{
    toMyInfo(){
      store.commit('setLeftValue')
      store.commit('setBottomValue',2)
    }
  }
}
</script>

<style scoped>

</style>
