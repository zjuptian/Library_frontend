import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import books from '@/page/books'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/books',
      name: 'books',
      component: books
    }

  ]
})
