import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/rvstudio/',
  plugins: [react(), tailwindcss()],
    server: {
    proxy: {
      '/api': {
        target: 'https://apiv2.writeme.ai',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }

})
