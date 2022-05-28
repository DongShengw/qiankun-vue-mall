<template>
  <v-bottom-navigation
      v-model="$store.state.bottomValue"
      v-show="$store.state.food === false"
      color="teal"
      light
      shift
  >
    <v-btn v-for="(item,index) in bottomItems" :key="index" >
      <span>{{item.name}}</span>
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import store from "@/store/index.js"
export default {
  name: "bottomNavigation",
  data(){
    return{
      bottomItems:store.state.bottomItems
    }
  }
}
</script>

<style scoped>

</style>
