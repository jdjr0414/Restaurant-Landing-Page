import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** Runs SSR build + prerender + sitemap after client build. Ensures prerendered HTML even when only `vite build` runs (e.g. Cloudflare). */
function prerenderPlugin() {
  return {
    name: 'prerender-after-build',
    closeBundle() {
      console.log('[prerender] Running SSR build and prerender...')
      execSync('npx vite build --ssr src/entry-server.tsx', {
        stdio: 'inherit',
        cwd: join(__dirname),
      })
      execSync('node scripts/prerender.mjs', { stdio: 'inherit', cwd: join(__dirname) })
      execSync('node scripts/generate-sitemap.mjs', { stdio: 'inherit', cwd: join(__dirname) })
      console.log('[prerender] Done.')
    },
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    // Only run prerender after client build, not during SSR build
    ...(isSsrBuild ? [] : [prerenderPlugin()]),
  ],
  server: { port: 5173, open: true },
  build: {
    emptyOutDir: !isSsrBuild,
  },
}))
