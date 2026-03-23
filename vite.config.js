import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/artome-360-feedback/',
  server: { port: 5173 }
})
