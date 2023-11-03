<script lang="ts">
	import Code from '@lib/components/code.svelte';
	import Compare from '@lib/components/compare.svelte';
</script>

<div class="grid gap-8 text-2xl">
	<Code lang="svelte">
		{`<script lang="ts">
	function remove_class(node: HTMLElement, to_remove: string){
		node.classList.remove(to_remove);
	}
<\/script>
<div 
	class="no-js"
	use:remove_class={"no-js"}
>
	Styled differently when JS load!
</div>

<style>
	.no-js{
		opacity: .2;
	}
<\/style>
`}
	</Code>
	<Compare title="Action remove class" src="/action-remove-class"></Compare>
</div>
