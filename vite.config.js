import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/data': {
        target: 'http://localhost:3000/jobs',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/data/,''),
      }
    }
  },
  plugins: [react()],
})
