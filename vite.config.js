import { resolve } from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from "rollup-plugin-visualizer"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'number-to-words-ru',
      fileName: 'index',
    },
  },
  plugins: [
    tsconfigPaths(),
    // visualizer({
    //   filename: "dist/build_stats.html",
    // })
  ],
})
