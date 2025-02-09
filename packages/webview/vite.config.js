import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    appType: 'custom',
    root: 'src',

    build: {
      outDir: '../../../dist',
      emptyOutDir: true,
      target: ['firefox78', 'chrome80', 'safari12.3']
    }
  }
})
