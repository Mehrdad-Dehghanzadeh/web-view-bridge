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
        entry: resolve(__dirname, 'src/core/main.ts'),
        name: 'webViewBridge',
        fileName: () => `webViewBridge.js`,
        formats: ['iife']
      },

      minify: true
    }
  }
})
