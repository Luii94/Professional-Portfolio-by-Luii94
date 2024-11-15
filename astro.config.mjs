// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://Luii94.github.io',
  base: 'Professional-Portfolio-by-Luii94',
  integrations: [tailwind()]
});