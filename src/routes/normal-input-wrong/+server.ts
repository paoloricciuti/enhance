import { json } from '@sveltejs/kit';
import { svelte_summit } from './data.js';

export function GET({ url: { searchParams } }) {
	const query = searchParams.get('query');
	if (query) {
		return json(
			svelte_summit
				.filter((obj) => obj.title.toLowerCase().includes(query.toLowerCase()))
				.map((obj) => obj.title)
		);
	}
	return json([]);
}
