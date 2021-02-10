import Vue from 'vue'
import VueRouter from 'vue-router'
import navexcellentcase from '../views/Nav-ExcellentCase.vue'
import navright from '../views/Nav-Right.vue'
import test from '../views/test.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/test',
        component: test
    },
    {
        path: '/navright',
        component: navright
    },
    {
        path: '/navexcellentcase',
        component: navexcellentcase
    }
]

const router = new VueRouter({
    routes
})

export default router