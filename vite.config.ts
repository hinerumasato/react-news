import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/rss': {
        target: 'https://dantri.com.vn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rss/, '')
      }
    },
    host: true
  },
  preview: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
