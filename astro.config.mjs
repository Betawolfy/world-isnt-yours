// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [Icons({ compiler: 'astro' })],
	},
	integrations: [
		starlight({
			title: 'Dist Err SMP Wiki',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started', slug: 'guides/getting-started' },
						{ label: 'Origins', slug: 'guides/origins' },
					],
				},
				{
					label: 'Crafts',
					items: [
						{ label: 'Custom Crafts', slug: 'crafts' },
					]
				},
				{
					label: 'Misc',
					items: [
						{ label: 'Credits', slug: 'credits' },
					]
				},
			],
			plugins: [starlightThemeObsidian({
                   backlinks: false,
                   graph: false
            })],
		}),
	],
});
