<script lang="ts">
	function remove_class(node: HTMLElement, to_remove: string) {
		node.classList.remove(to_remove);
	}
</script>

<div class="no-js" use:remove_class={'no-js'}>Styled differently when JS load!</div>

<style>
	.no-js {
		opacity: 0.2;
	}
</style>
