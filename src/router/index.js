import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import(/* webpackChunkName: "index" */ '../components/Index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
