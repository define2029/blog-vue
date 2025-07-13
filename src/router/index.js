//通过vue-router插件实现模板路由配置
import { createRouter, createWebHistory } from 'vue-router'

//创建路由器
const creatRouter = () => {
  return createRouter({
    history: createWebHistory(),
    routes: [],
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
