import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sindre.ai',
  integrations: [tailwind()],
  head: {
    scripts: [
      {
        src: "https://unpkg.com/flowbite@1.5.3/dist/flowbite.js",
        async: true,
      },
    ],
  },
  server: {
    port: 3333
  },
  vite: {
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
});
