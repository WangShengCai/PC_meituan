// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 主页面 css 样式
import '@/assets/css/main.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
// document 上绑定事件
Vue.directive('document-click', {
  bind (el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  },
  update (el, binding, vnode) {

  },
  inserted (el, binding, vnode) {

  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App: App
  },
  template: '<App/>'
})
