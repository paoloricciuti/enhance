<script lang="ts">
	import Code from '@lib/components/code.svelte';
</script>

<Code file="Select.svelte" lang="svelte">
	{`<script lang="ts">
	import MeltSelect from "./MeltSelect.svelte";
	import tutorials from "./tutorials";
<\/script>

<!-- if there's no javascript i want a normal select -->
<MeltSelect options={tutorials} name="tutorial" /\>
`}
</Code>
