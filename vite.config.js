import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bowling-mirabel/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
