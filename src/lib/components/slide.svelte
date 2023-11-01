<script context="module" lang="ts">
	let index = 0;
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { navigation } from '@stores/navigation';

	type Bool = boolean | null;
	type StringOrNull = string | null;
	type Transition = 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom' | null;

	export let animate: Bool = null;
	export let animateEasing: StringOrNull = null;
	export let animateUnmatched: Bool = null;
	export let animateId: StringOrNull = null;
	export let animateRestart: Bool = null;
	export let background: StringOrNull = null;
	export let gradient: StringOrNull = null;
	export let image: StringOrNull = null;
	export let video: StringOrNull = null;
	export let iframe: StringOrNull = null;
	export let interactive: Bool = null;
	export let transition: Transition = null;

	const dispatch = createEventDispatcher();
	const slideIndex = index++;

	$: enter = $navigation.currentSlide === slideIndex;
	$: enter ? dispatch('in') : dispatch('out');

	delete $$restProps.class;
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
	class={$$props.class || ''}
	{...$$restProps}
>
	<slot />
</section>

<style>
	section {
		height: 100%;
		display: grid !important;
		place-items: center;
	}
</style>
