<script lang="ts">
	import Step from '@lib/components/step.svelte';
</script>

<div class="flex [&>*]:w-full gap-4 text-left [&>*]:opacity-20">
	<Step type="div" class="custom">
		Whenever possible try to use HTML elements that are already capable of sending the information
		to the server.
		<p class="text-lg">(form, a, input, button)</p>
	</Step>
	<Step type="div" class="custom">
		When you receive the data always assume the form has been submitted without JS and act
		accordingly.
	</Step>
</div>

<style>
	:global(.fragment.visible.current-fragment) {
		opacity: 1;
	}
</style>
