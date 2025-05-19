<script lang="ts">
	import type { Snippet } from 'svelte';
	let { fallback, children }: { fallback?: Snippet; children?: Snippet } = $props();
</script>

{#await Promise.resolve()}
	{@render fallback?.()}
{:then}
	{@render children?.()}
{/await}
