import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'@config': path.resolve(process.cwd(), './src/config.ts'),
			'@assets': path.resolve(process.cwd(), './src/assets/'),
			'@slides': path.resolve(process.cwd(), './src/slides/'),
			'@components': path.resolve(process.cwd(), './src/lib/components/index.ts'),
			'@languages': path.resolve(process.cwd(), './src/lib/languages/index.ts'),
			'@lib': path.resolve(process.cwd(), './src/lib'),
			'@stores': path.resolve(process.cwd(), './src/lib/stores'),
			'@styles': path.resolve(process.cwd(), './src/lib/styles')
		},
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
