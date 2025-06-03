<script lang="ts">
	import Code from '@lib/components/code.svelte';
</script>

<Code file="Counter.svelte" lang="svelte">
	{`<scr` +
		`ipt lang="ts">
	let { initial } = $props();

	let count = $state(initial);
<\/script>

<button on:click={() => count++}>
	{count}
</button>

<st` +
		`yle>
	button {
		background: #ff3e00;
	}
</style>
`}
</Code>
