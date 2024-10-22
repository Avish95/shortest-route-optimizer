import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**', './src/main.ts'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        provider: 'v8', // 'istanbul' or 'v8'
        exclude: [
          ...configDefaults.exclude,
          'e2e/**',
          './src/main.ts',
          './src/types/**',
          'shortest-route-optimizer/src/types/**',
          'env.d.ts'
        ],
      },
    },
  }),
)
