<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	interface Props extends HTMLAttributes<HTMLElement> {
		type?: string;
		order?: string | null;
		fadeIn?: boolean;
		fadeOut?: boolean;
		fadeUp?: boolean;
		fadeDown?: boolean;
		fadeLeft?: boolean;
		fadeRight?: boolean;
		fadeInThenOut?: boolean;
		currentVisible?: boolean;
		fadeInThenSemiOut?: boolean;
		semiFadeOut?: boolean;
		highlightRed?: boolean;
		highlightGreen?: boolean;
		highlightBlue?: boolean;
		highlightCurrentRed?: boolean;
		highlightCurrentGreen?: boolean;
		highlightCurrentBlue?: boolean;
		grow?: boolean;
		shrink?: boolean;
		strike?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		type = 'p',
		order = null,
		fadeIn = false,
		fadeOut = false,
		fadeUp = false,
		fadeDown = false,
		fadeLeft = false,
		fadeRight = false,
		fadeInThenOut = false,
		currentVisible = false,
		fadeInThenSemiOut = false,
		semiFadeOut = false,
		highlightRed = false,
		highlightGreen = false,
		highlightBlue = false,
		highlightCurrentRed = false,
		highlightCurrentGreen = false,
		highlightCurrentBlue = false,
		grow = false,
		shrink = false,
		strike = false,
		children,
		...rest
	}: Props = $props();
</script>

<svelte:element
	this={type}
	class:fade-in={fadeIn}
	class:fade-out={fadeOut}
	class:fade-up={fadeUp}
	class:fade-down={fadeDown}
	class:fade-left={fadeLeft}
	class:fade-right={fadeRight}
	class:fade-in-then-out={fadeInThenOut}
	class:current-visible={currentVisible}
	class:fade-in-then-semi-out={fadeInThenSemiOut}
	class:semi-fade-out={semiFadeOut}
	class:highlight-red={highlightRed}
	class:highlight-green={highlightGreen}
	class:highlight-blue={highlightBlue}
	class:highlight-current-red={highlightCurrentRed}
	class:highlight-current-green={highlightCurrentGreen}
	class:highlight-current-blue={highlightCurrentBlue}
	class:grow
	class:shrink
	class:strike
	data-fragment-index={order}
	{...rest}
	class="fragment {rest.class || ''}"
>
	{@render children?.()}
</svelte:element>
