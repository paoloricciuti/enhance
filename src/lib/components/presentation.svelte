<script lang="ts">
	import { onMount } from 'svelte';
	import Reveal from 'reveal.js';

	import 'reveal.js/dist/reveal.css';
	import '@styles/theme.css';
	import '@styles/code.css';

	import { navigation } from '@stores/navigation';
	import options from '@config';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	onMount(() => {
		const deck = new Reveal(options);

		// keep track of current slide
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		deck.on('slidechanged', () => {
			// update navigation store
			updateSlideStore(deck);
		});

		deck.initialize().then(() => {
			// update navigation store
			updateSlideStore(deck);

			// we pass the language to the `<Code>` block
			// and higlight code blocks after initialization
			highlightCodeBlocks(deck);
		});

		// reload page after update to avoid HMR issues
		reloadPageAfterUpdate();
	});

	function updateSlideStore(deck: Reveal.Api) {
		$navigation = {
			hash: window.location.hash,
			currentSlide: deck.getSlidePastCount(),
			indices: deck.getIndices(),
			availableRoutes: deck.availableRoutes()
		};
	}

	function updateHash() {
		$navigation.hash = window.location.hash;
	}

	function highlightCodeBlocks(deck: Reveal.Api) {
		const highlight = deck.getPlugin('highlight');
		const codeBlocks = [...document.querySelectorAll('code')];
		codeBlocks.forEach((block) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			highlight.highlightBlock(block);
		});
	}

	function reloadPageAfterUpdate() {
		if (import.meta.hot) {
			import.meta.hot.on('vite:afterUpdate', () => {
				location.reload();
			});
		}
	}
</script>

<svelte:window onhashchange={updateHash} />

<div class="reveal">
	<div class="slides">
		{@render children?.()}
	</div>
</div>
