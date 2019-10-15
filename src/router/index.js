import Vue from 'vue'
import Router from 'vue-router'

// 主页面模板
import defaultPage from '@/layout/default.vue'
// 首页
import Index from '@/page/index.vue'
// 登录 注册 页面载体
import blankPage from '@/layout/blank.vue'
// 切换城市页面
import ChangeCity from '@/page/changeCity.vue'
// 商品列表项
import goodsList from '@/page/goodslist.vue'
// 登录
import Login from '@/page/login.vue'
// 注册
import Reigster from '@/page/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: goodsList
        },
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blankPage,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Reigster
        }
      ]
    }
  ]
})
