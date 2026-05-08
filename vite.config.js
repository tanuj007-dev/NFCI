import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-core';
            if (id.includes('swiper')) return 'swiper-vendor';
            if (id.includes('framer-motion')) return 'motion-vendor';
            if (id.includes('lucide')) return 'icons-vendor';
            return 'vendor';
          }
        },
      },
    },
  },
})
