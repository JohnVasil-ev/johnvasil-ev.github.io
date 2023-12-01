import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  ssr: true,
  srcDir: "client",
  imports: {
    autoImport: true,
    dirs: [
      'shared/*/index.ts',
      'widgets/*/index.ts',
      'features/*/index.ts',
    ],
  },
  dir: {
    middleware: "app/midlleware",
    layouts: "app/layouts",
    modules: "app/modules",
    plugins: "app/plugins",
    public: "app/public",
    assets: "app/assets",
    static: "app/static",
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@hypernym/nuxt-anime',
    '@vueuse/nuxt',
  ],
  vite: {
    plugins: [
      svgLoader({}),
    ],
  },
});
