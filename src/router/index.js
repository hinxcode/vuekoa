import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import TestForm from '@/components/TestForm'
import ErrorPageComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LoginForm
    },
    {
      path: '/test',
      component: TestForm
    },
    {
      path: '*',
      component: ErrorPageComponent
    }
  ]
})
