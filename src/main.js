import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// SVG 组件自动注册脚本
import 'virtual:svg-icons-register'

const app = createApp(App)

// 引入全局方法
import * as utils from '@/utils'
app.config.globalProperties.$utils = utils

// 全局注册 SVG 组件
import SvgIcon from '@/components/SvgIcon/index.vue'
app.component('svg-icon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
