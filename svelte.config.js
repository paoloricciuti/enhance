import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
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
		}
	}
};

export default config;
