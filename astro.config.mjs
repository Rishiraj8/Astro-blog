import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  site: 'http://localhost:4321/', // Adjust this URL to match the root URL of your website
  integrations: [mdx(), sitemap(), tailwind()],
  assets: "./src/Images"
});

