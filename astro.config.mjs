// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@vercel/analytics/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [vercel()],
});
