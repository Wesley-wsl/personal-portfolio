import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    site: "https://wesleywestelley.com.br",
	integrations: [
		tailwind(),
		react(),
        sitemap(),
		sanity({
			projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
			dataset: import.meta.env.VITE_SANITY_DATASET,
			useCdn: true
		}),
		partytown({
			config: {
				forward: ['dataLayer.push']
			}
		})
	]
});
