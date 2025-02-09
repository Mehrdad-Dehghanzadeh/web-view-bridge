import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(() => {
  return {
    appType: 'custom',
    root: 'src',

    build: {
      outDir: resolve(__dirname, '../../dist'),
      emptyOutDir: true,
      target: ['firefox78', 'chrome80', 'safari12.3'],

      lib: {
        entry: resolve(__dirname, './src/lib/main.ts'),
        name: 'webViewBridge',
        // the proper extensions will be added
        fileName: () => `webViewBridge.js`,
        formats: ['iife']
      },

      minify: true
    }
  }
})
