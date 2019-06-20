// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import testA from '../views/testa.vue'
import testB from '../views/testb.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routers: [
    {
      path: '/testA',
      component: testA
    },
    {
      path: '/testB',
      component: testB
    }
  ]
})
