import { svelte_summit } from './data';

export function load({ url: { searchParams } }) {
	const search = searchParams.get('search');
	if (!search) return {};
	const show = svelte_summit.find((obj) => obj.title === search);
	return { show };
}
