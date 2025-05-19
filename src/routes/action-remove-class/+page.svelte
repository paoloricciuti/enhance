<script lang="ts">
	function remove_class(to_remove: string) {
		return (node: HTMLElement) => {
			node.classList.remove(to_remove);
		};
	}
</script>

<div class="no-js" {@attach remove_class('no-js')}>Styled differently when JS load!</div>

<style>
	.no-js {
		opacity: 0.2;
	}
</style>
