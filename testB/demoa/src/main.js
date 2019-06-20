/** 入口js 创建vue实例
引入vue
*/

import Vue from 'vue'
import router from './router'
import App from './App.vue'
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router: router
})
