import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect:'/picture',
  },
  {
    path: "/picture",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/book",
    component: () => import("@/views/Book.vue")
  },
]


export default routes
