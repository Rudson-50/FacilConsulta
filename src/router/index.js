import Vue from 'vue'
import VueRouter from 'vue-router'
import pageOne from '../views/pageOne.vue'
import pageTwo from '../views/pageTwo.vue'
import pageFinal from '../views/pageFinal.vue'
import pageUser from '../views/pageUser.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pageOne',
    component: pageOne
  },
  {
    path: '/pageTwo',
    name: 'pageTwo',
    component: pageTwo
  },
  {
    path: '/pageFinal',
    name: 'pageFinal',
    component: pageFinal
  },
  {
    path: '/pageUser',
    name: 'pageUser',
    component: pageUser
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
