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
            '/macros/s/AKfycbz-iiHNrt7RlrVQLO-Ip6nR9PT--R25KYy7CBgi4wN2YIpifltYZmbugNATBLX4OQeNjw/exec'
          )
      }
    }
  }
})