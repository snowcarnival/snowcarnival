import Vue from 'vue'
import VueRouter from 'vue-router'
import boutiquecase from '../views/boutiquecase.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/boutiquecase',
    component: boutiquecase
  }
]

const router = new VueRouter({
  routes
})

export default router
