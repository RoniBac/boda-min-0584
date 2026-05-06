import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/api/,
            '/macros/s/AKfycbwbOMk6h1qSsf1a3gK2uL0QxFtLm_azV8rGFlZywzGFi2LFPlF-5ubV8oe6YFM9Yr6-MQ/exec'
          )
      }
    }
  }
})