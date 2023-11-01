<script lang="ts">
	import Step from '@lib/components/step.svelte';
</script>

<div class="flex [&>*]:w-full gap-4 text-left [&>*]:opacity-20">
	<Step type="div" class="custom">Always provide a fallback to submit a form without JS.</Step>
	<Step type="div" class="custom">
		Don't be afraid of changing the design if that leads to better UX.
	</Step>
</div>

<style>
	:global(.fragment.visible.current-fragment) {
		opacity: 1;
	}
</style>
