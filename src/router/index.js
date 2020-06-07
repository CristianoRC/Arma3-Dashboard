import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Anotations from '../views/Anotations.vue'
import Teams from '../views/Teams.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anotations',
    name: 'Anotations',
    component: Anotations
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  }

]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
