import { sveltekit } from '@sveltejs/kit/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		vanillaExtractPlugin({
			identifiers: 'short'
		})
	]
	// ssr:
	// 	process.env.NODE_ENV === 'development'
	// 		? {}
	// 		: {
	// 				noExternal: ['@vanilla-extract/css', '@vanilla-extract/css/fileScope']
	// 		  }
};

export default config;
