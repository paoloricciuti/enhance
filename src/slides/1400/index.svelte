<script lang="ts">
	import Code from '@lib/components/code.svelte';
</script>

<Code file="NoSSR.svelte" lang="svelte">
	{`
<s` +
		`cript lang="ts">
	import type { Snippet } from 'svelte';
	type Props = { fallback?: Snippet; children?: Snippet };
	let { fallback, children } : Props = $props();
</script>

{#await Promise.resolve()}
	{@render fallback?.()}
{:then}
	{@render children?.()}
{/await}
`}
</Code>
