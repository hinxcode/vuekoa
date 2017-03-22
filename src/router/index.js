import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'fuck',
      component: LoginForm
    }
  ]
})
