import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/rztest',
    name: 'RZTest',
    // component: RZTest
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "rztest" */ '../views/RZTest.vue')
  },
  {
    path: '/rzlocalexpressreaddirsync',
    name: 'RZLocalExpressReadDir',
    // component: RZTest
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "rztest" */ '../views/RZLocalExpressReadDir.vue')
  },
  {
    path: '/rzlocalcmd',
    name: 'RZLocalCommand',
    // component: RZTest
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "rztest" */ '../views/RZLocalCommand.vue')
  },
  {
    path: '/rz_first_template',
    name: 'RZGetFirstTemplate',
    // component: RZTest
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "rztest" */ '../views/RZGetFirstTemplate.vue')
  },
  {
    path: '/rznasa',
    name: 'RZNASA',
    // component: RZTest
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "rzfileio" */ '../views/RZNASA.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
