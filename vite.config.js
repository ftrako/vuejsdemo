import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: false, // true表示自动打开浏览器
    hmr: true // 热更新
  },
  plugins: [vue()],
})
