<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	interface Props extends HTMLAttributes<HTMLElement> {
		type?: string;
		children?: import('svelte').Snippet;
	}

	let { type = 'h2', children, ...rest }: Props = $props();
</script>

<svelte:element this={type} {...rest} class="r-fit-text {rest.class || ''}">
	{@render children?.()}
</svelte:element>
