<script lang="ts">
	import Code from '@lib/components/code.svelte';
	import Compare from '@lib/components/compare.svelte';
</script>

<div class="grid gap-8 text-2xl">
	<Code lang="svelte">
		{`<script lang="ts">
	// create dialog with melt-ui
<\/script>

<!-- this will open the dialog -->
<button
	{...$trigger}
	use:trigger
>
	Open Dialog
</button>

<!-- rest of the dialog code -->
`}
	</Code>
	<Compare title="Dialog" src="/dialog-wrong"></Compare>
</div>
