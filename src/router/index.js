import Vue from 'vue'
import Router from 'vue-router'
// 登录
import Login from '@/components/login'
// 注册
import Personal from '@/components/register/Rpersonal'
import Business from '@/components/register/Rbusiness'
// 商家后台
// import Admin from '@/components/admin'
// import HomePage from '@/components/admin/homePage'
// 商家账号管理
import BusAccount from '@/components/admin/busAccount'
// 子账号管理
import Subaccount from '@/components/admin/subaccount'
// 角色权限
import RolePermission from '@/components/admin/rolePermission'
// 操作日记
import Diary from '@/components/admin/diary'
// 分类管理
import Classification from '@/components/admin/classification'
// 我的方案
import MyPlay from '@/components/admin/myPlay'
// 方案库
import Method from '@/components/admin/method'
// 我的模型
import MyModel from '@/components/admin/myModel'
// 模型库
import ModelBase from '@/components/admin/modelBase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Admin',
      name: 'Admin',
      component: function (resolve){
        require (['@/components/admin'],resolve)
      },
      children: [
        {
          // 首页路由地址
          path: 'homePage',
          component: function (resolve){
            require (['@/components/admin/homePage'],resolve)
          }
        },
        {
          // 商家账号管理路由地址
          path: 'busAccount',
          component: BusAccount
        },
        {
          // 子账号管理路由地址
          path: 'subaccount',
          component: Subaccount
        },
        {
          // 角色权限路由地址
          path: 'rolePermission',
          component: RolePermission
        },
        {
          // 操作日记路由地址
          path: 'diary',
          component: Diary
        },
        {
          // 分类管理路由地址
          path: 'classification',
          component: Classification
        },
        {
          // 我的方案路由地址
          path: 'myPlay',
          component: MyPlay
        },
        {
          // 方案库路由地址
          path: 'method',
          component: Method
        },
        {
          // 我的模型路由地址
          path: 'myModel',
          component: MyModel
        },
        {
          // 模型库路由地址
          path: 'modelBase',
          component: ModelBase
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      // 个人注册路由地址
      path: '/registrationPe',
      component: Personal
    },
    {
      // 商家注册路由地址
      path: '/registrationBu',
      component: Business
    },
    {
      path: '/*',
      redirect: '/Login'
    }
  ]
})
