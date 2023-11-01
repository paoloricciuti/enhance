<script lang="ts">
	import Code from '@lib/components/code.svelte';
	import Compare from '@lib/components/compare.svelte';
</script>

<div class="grid gap-8 text-2xl">
	<Code lang="ts">
		{`
export const actions: Actions = {
	async default({ request }) {
		const data = await request.formData();
		const search = data.get('search');
		const show = svelte_summit.
			find((obj) => obj.title === search);
		return {
			success: true,
			show
		};
	}
};`}
	</Code>
	<Compare title="Normal Input" src="/normal-input-wrong" />
</div>
