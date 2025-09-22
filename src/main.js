import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from '@/stores'
const app = createApp(App)

// 引入自定义全局样式
import '@/assets/css/global.css'

// 引入全局方法
import * as utils from '@/utils'
app.config.globalProperties.$utils = utils

// SVG 组件自动注册脚本
import 'virtual:svg-icons-register'
// 全局注册 SVG 组件
import SvgIcon from '@/components/SvgIcon/index.vue'
app.component('svg-icon', SvgIcon)

app.use(pinia)
app.use(router)

app.mount('#app')
