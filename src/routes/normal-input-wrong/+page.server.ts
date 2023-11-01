import type { Actions } from './$types';
import { svelte_summit } from './data';

export const actions: Actions = {
	async default({ request }) {
		const data = await request.formData();
		const search = data.get('search');
		const show = svelte_summit.find((obj) => obj.title === search);
		return {
			success: true,
			show
		};
	}
};
