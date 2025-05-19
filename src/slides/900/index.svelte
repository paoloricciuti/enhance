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
	<Code lang="svelte">
		{`<script lang="ts">
	let { data } = $props();
<\/script>

<form data-sveltekit-keepfocus>
	<input name="search"
		oninput={(e) => {
				e.target.form?.requestSubmit();
		}} /\>
</form>
<ul>
	{#each data.ambassadors as ambassador}
		<li>{ambassador}</li>
	{/each}
</ul>
`}
	</Code>
	<Compare title="Normal Input" src="/fallback-submit-wrong"></Compare>
</div>
