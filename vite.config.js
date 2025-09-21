import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: false, // Disable minification to avoid CSS parsing issues
    cssMinify: false, // Disable CSS minification
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: '/',
})
