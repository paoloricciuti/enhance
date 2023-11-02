<script lang="ts">
	import Code from '@lib/components/code.svelte';
</script>

<Code file="NoSSR.svelte" lang="svelte">
	{`
{#await Promise.resolve()}
	<slot name="fallback" /\>
{:then}
	<slot /\>
{/await}
`}
</Code>
