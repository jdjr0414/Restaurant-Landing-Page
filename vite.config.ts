import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: { port: 5173, open: true },
  build: {
    emptyOutDir: !isSsrBuild,
    // manualChunks only for client bundle; SSR build marks react as external and cannot use this
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
            },
          },
        },
  },
}))
