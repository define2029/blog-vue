import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false,
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx', 'src/*.js', 'src/*.vue']
    }),
    createSvgIconsPlugin({
      // 指定 SVG图标 保存的文件夹路径
      // eslint-disable-next-line no-undef
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
      // 指定 使用svg图标的格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true, //vite项目启动时自动打开浏览器
    hmr: true,
    port: 9000
  }
})
