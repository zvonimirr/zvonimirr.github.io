import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://zvonimirr.github.io",
  integrations: [
    tailwind(),
    astroImageTools,
    compress(),
    sitemap(),
    robotsTxt(),
  ],
  experimental: {
    viewTransitions: true,
  },
});

