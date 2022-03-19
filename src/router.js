import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

 const About = () => import(/* webpackChunkName: "about" */ './views/About.vue')
 const Users = () => import(/* webpackChunkName: "about" */ './views/Users.vue')
 
export default new Router({
  mode: 'history', // history mode,제거하면 hash mode
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/users/:userId',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Users
    }
  ]
})
