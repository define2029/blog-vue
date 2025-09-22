//通过vue-router插件实现模板路由配置
import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home/index.vue'
//创建路由器
const creatRouter = () => {
  return createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: home,
        children: [
          {
            path: '/article',
            name: 'article',
            component: () => import('../views/article/index.vue')
          }
        ]
      }
    ],
    scrollBehavior() {
      return {
        left: 0,
        top: 0
      }
    }
  })
}
let router = creatRouter()
//重置路由
export function resetRouter() {
  const newRouter = creatRouter()
  router.matcher = newRouter.matcher // 重置路由
}

export default router
