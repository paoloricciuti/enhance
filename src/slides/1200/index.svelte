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
	import Select from './Select.svelte';
	import Button from './Button.svelte';
	let { form } = $props();
<\/script>

<form method="post">
	<Select /\> <Button /\>
</form>

{#if form?.tutorial}
	Visit the tutorial for 
	<strong>
		<a href={form.tutorial.link}>
			{form.tutorial.title}
		</a>
	</strong>
{/if}

`}
	</Code>
	<Compare title="Normal Input" src="/combobox-wrong"></Compare>
</div>
