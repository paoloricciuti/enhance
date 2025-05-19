<script lang="ts">
	import Code from '@lib/components/code.svelte';
</script>

<Code file="Select.svelte" lang="svelte">
	{`<script lang="ts">
	import MeltSelect from "./MeltSelect.svelte";
	import NormalSelect from "./NormalSelect.svelte";
	import NoSSR from "./NoSSR.svelte";
	import tutorials from "./tutorials";
<\/script>

<NoSSR>
	{#snippet fallback()}
		<NormalSelect 
			options={tutorials}
			name="tutorial"
		/\>
	{/snippet}
	<MeltSelect options={tutorials} name="tutorial" /\>
</NoSSR>
`}
</Code>
