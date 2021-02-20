import Vue from 'vue'
import VueRouter from 'vue-router'
import boutiquecase from '../views/boutiquecase.vue'
import culturalresort from "../views/culturalresort.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/boutiquecase',
    component: boutiquecase
  },
  {
    path: "/culturalresort",
    component:culturalresort
  }
]

const router = new VueRouter({
  routes
})

export default router
