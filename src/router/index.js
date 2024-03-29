import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginForm from '../views/LoginForm'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginForm',
    component:LoginForm
  },
  {
    path:'/main',
    name:'Main',
    component:Main
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
