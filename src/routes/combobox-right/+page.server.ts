import type { Actions } from './$types';
import { tutorials } from './tutorials';

export const actions: Actions = {
	async default({ request }) {
		const data = await request.formData();
		const selected = data.get('tutorial');
		const tutorial = tutorials.find((el) => el.title === selected);
		return {
			tutorial
		};
	}
};
