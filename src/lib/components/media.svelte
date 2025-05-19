<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Bool = boolean | null;
	type Element = 'video' | 'img' | 'iframe';

	interface Props extends HTMLAttributes<HTMLElement> {
		type: Element;
		src: string;
		autoplay?: Bool;
		preload?: Bool;
		children?: import('svelte').Snippet;
	}

	let { type, src, autoplay = null, preload = null, children, ...rest }: Props = $props();
</script>

<svelte:element
	this={type}
	data-src={src}
	data-autoplay={autoplay}
	data-prelod={preload}
	class={rest.class || ''}
	{...rest}
>
	{@render children?.()}
</svelte:element>
