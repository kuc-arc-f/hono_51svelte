import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [svelte()], 
      build: {
        lib: {
          entry: [
            './src/main.ts',
            './src/client/About.ts',
          ],
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [
        build(),
        devServer({
          entry: 'src/index.tsx'
        })
      ]
    }
  }
})

