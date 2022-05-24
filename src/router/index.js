import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect:'/home',
  },
  {
    path: "/home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/food",
    name:'food',
    component: () => import("@/views/Food.vue")
  },
  {
    path: "/button",
    name:'button',
    component: () => import("@/views/Food.vue")
  },
]


const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? '/vue-1' : '/',
  mode: 'history',
  routes,
});
export default router
