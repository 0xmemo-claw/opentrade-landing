import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://avax-replica.vercel.app',
  output: 'server',
  adapter: vercel(),
});
