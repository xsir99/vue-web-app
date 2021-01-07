import Vue from 'vue'
import Router from 'vue-router'
// import Bus from '@/bus'

Vue.use(Router)

const router = new Router({
  mode: 'history',//hash history
  routes: [
    {
      path: '/',
      name: 'layouts',
      redirect: '/main',
      component: () => import('@/layouts'),
      children: [
        {
          path: '/main',
          name: '主页',
          component: () => import('_views/main_page'),
        },
        {
          path: '/mine',
          name: '我的',
          component: () => import('_views/mine'),
        },
        {
          path: '/info',
          name: '资讯',
          component: () => import('_views/information'),
        },
        {
          path: '/log',
          name: '日志',
          component: () => import('_views/log'),
        },
        {
          path: '/trade',
          name: '交易',
          component: () => import('_views/trade'),
        },
      ],
    },
    // {
    //   path: '/login_signup',
    //   name: 'login_signup',
    //   component: () => import('_views/login_signup'),
    //   meta: {
    //     title: '登录注册',
    //   },
    // },
    // {
    //   path: '/preview',
    //   name: 'preview',
    //   component: () => import('_views/preview_page'),
    //   meta: {
    //     title: '预览',
    //   },
    // },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0,
      }
    }
  },
})
/**
 * 路由拦截
 * 不是所有版块都需要鉴权的,所以需要鉴权的在路由meta添加添加一个字段needLogin,
 * 设置为true的时候就必须走鉴权,像登录页这些不要,是可以直接访问的!
 */
// router.beforeEach((to, from, next) => {
//   // 路由发生变化修改页面title
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   if (to.path === '/login_signup' || to.path === '/home' || to.path === '/') {
//     next()
//     return
//   }
//   // let authorization = localStorage.getItem('Authorization')
//   // let allRights = localStorage.getItem('allRights')?JSON.parse(localStorage.getItem('allRights')):[]
//   // let needRights = to.meta.rights || []
//   // if (authorization && allRights.length) {
//   //   if (needRights.length) {
//   //     if (isValidRights(needRights,allRights)){
//   //       next()
//   //     }else{
//   //       let firstPath = rightsToPathMap().get(allRights[0])
//   //       if (firstPath) {
//   //         Bus.$message.error('您没有权限！')
//   //         next({ path: firstPath })
//   //       } else {
//   //         Bus.$message.error('您没有权限！')
//   //       }
//   //     }
//   //   } else {
//   //     next()
//   //   }
//   // } else {
//   //   clearLogin()
//   //   next({ path: '/login_signup?from=' + to.fullPath })
//   // }
// })

export default router
