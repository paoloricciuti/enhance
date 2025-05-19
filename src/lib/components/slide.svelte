<script module lang="ts">
	let index = 0;
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { createEventDispatcher } from 'svelte';
	import { navigation } from '@stores/navigation';

	type Bool = boolean | null;
	type StringOrNull = string | null;
	type Transition = 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom' | null;

	interface Props extends HTMLAttributes<HTMLElement> {
		animate?: Bool;
		animateEasing?: StringOrNull;
		animateUnmatched?: Bool;
		animateId?: StringOrNull;
		animateRestart?: Bool;
		background?: StringOrNull;
		gradient?: StringOrNull;
		image?: StringOrNull;
		video?: StringOrNull;
		iframe?: StringOrNull;
		interactive?: Bool;
		transition?: Transition;
		children?: import('svelte').Snippet;
	}

	let {
		animate = null,
		animateEasing = null,
		animateUnmatched = null,
		animateId = null,
		animateRestart = null,
		background = null,
		gradient = null,
		image = null,
		video = null,
		iframe = null,
		interactive = null,
		transition = null,
		children,
		...rest
	}: Props = $props();

	const dispatch = createEventDispatcher();
	const slideIndex = index++;

	let enter = $derived($navigation.currentSlide === slideIndex);

	$effect(() => {
		if (enter) {
			dispatch('in');
		} else {
			dispatch('out');
		}
	});
</script>

<section
	data-auto-animate={animate}
	data-auto-animate-easing={animateEasing}
	data-auto-animate-unmatched={animateUnmatched}
	data-auto-animate-id={animateId}
	data-auto-animate-restart={animateRestart}
	data-background-color={background}
	data-background-gradient={gradient}
	data-background-image={image}
	data-background-video={video}
	data-background-iframe={iframe}
	data-background-interactive={interactive}
	data-transition={transition}
	{...rest}
>
	{@render children?.()}
</section>

<style>
	section {
		height: 100%;
		display: grid !important;
		place-items: center;
	}
</style>
