import Vue from 'vue'
import VueRouter from 'vue-router'
import tarifsVue from '../view/tarifs.vue'
import les_vehiculesVue from '../view/les_vehicules.vue'
import Home from '../view/Home.vue'
import servicesVue from '../view/services.vue'
import contactVue from '../view/contact'

Vue.use(VueRouter)

const routes =[
  {
    path: '/tarifs',
    name:'tarifs',
    component:tarifsVue
    
  },
  {
    path:'/les_vehicules',
    name:'les_vehicules',
    component:les_vehiculesVue
  },
  {
    path:'/',
    name:'Home',
    component: Home
  },
  {
    path:'/services',
    name:'services',
    component:servicesVue
  },
  {
    path:'/contact',
    name:'contact',
    component:contactVue
  }
  
]

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})
export default router

