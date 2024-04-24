import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
      fastRefresh: process.env.NODE_ENV !== 'test'
  })],
  server: {
      port: 3000  // Set the development server to run on port 3000
  }
})