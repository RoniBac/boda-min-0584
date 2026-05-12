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
            '/macros/s/AKfycbwZPNe5qXi7ildkjALv4dObRuaQIgFXBsNDOMILHs9-XpYcW-fsIGionnanHZQ2nTWP9A/exec'
          )
      }
    }
  }
})