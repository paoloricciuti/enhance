<script context="module" lang="ts">
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
		{`<script lang="ts">
	export let data;
</scr` +
			`ipt>

<form data-sveltekit-keepfocus>
	<input name="search"
		on:input={(e) => {
				e.target.form?.requestSubmit();
		}} >
	<SubmitButton></SubmitButton>
</form>
<ul>
	{#each data.ambassadors as ambassador}
		<li>{ambassador}</li>
	{/each}
</ul>
`}
	</Code>
	<Compare title="Normal Input" src="/fallback-submit-right"></Compare>
</div>
