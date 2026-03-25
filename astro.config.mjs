// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSiteGraph from "starlight-site-graph";
import starlightThemeGalaxy from "starlight-theme-galaxy";
import Icons from "unplugin-icons/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  vite: {
    plugins: [Icons({ compiler: "astro" })],
  },
  integrations: [
    starlight({
      title: "Dist Err SMP Wiki",
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting started", slug: "guides/getting-started" },
            { label: "Origins", slug: "guides/origins" },
          ],
        },
        {
          label: "Crafts",
          items: [{ label: "Custom Crafts", slug: "crafts" }],
        },
        {
          label: "Lore",
          items: [{ label: "Home", slug: "lore" }],
        },
        {
          label: "Misc",
          items: [
            { label: "FAQ / Troubleshooting", slug: "troubleshoot" },
            { label: "Changelog", slug: "devlogs" },
            { label: "Credits", slug: "credits" },
          ],
        },
      ],
      plugins: [
        starlightThemeGalaxy(),
        starlightSiteGraph({
          debug: false, // See "General Settings"
          sitemapConfig: {}, // See "Sitemap Settings"
          graphConfig: {}, // See "Graph Settings"
          backlinksConfig: {}, // See "Backlinks Settings"
        }),
      ],
    }),
    sitemap(),
  ],
});
