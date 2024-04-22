import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define:{
    'process.env.SECRET_JSON': JSON.stringify(process.env.SECRET_JSON)
  },
  plugins: [react()],
})
