import { resolve } from 'path'
// import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'number-to-words-ru',
      fileName: 'index',
    },
  },
  plugins: [
    tsconfigPaths(),
    // visualizer({
    //   filename: 'dist/build_stats.html',
    // }),
  ],
})
