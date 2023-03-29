import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Todo-App/',         // this is the base url in the format /repo-name/ for hosting in github pages
  plugins: [react()]
})
