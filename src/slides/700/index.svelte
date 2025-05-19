<script module lang="ts">
	export const props: Props = {
		animate: true
	};
</script>

<script lang="ts">
	import Code from '@lib/components/code.svelte';
	import Compare from '@lib/components/compare.svelte';
	import type { Props } from '@slides/types';
</script>

<div class="grid gap-8 text-2xl">
	<Code lang="ts">
		{`
export function load({ url: { searchParams } }) {
	const search = searchParams.get('search');
	if (!search) return {};
	const show = svelte_summit.find((obj) =>
		obj.title.includes(search)
	);
	return { show };
}`}
	</Code>
	<Compare title="Normal Input" src="/normal-input-right" />
</div>
