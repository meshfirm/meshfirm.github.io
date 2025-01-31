import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  head: {
    scripts: [
      {
        src: "https://unpkg.com/flowbite@1.5.3/dist/flowbite.js",
        async: true,
      },
    ],
  },
});
