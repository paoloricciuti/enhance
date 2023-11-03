<script lang="ts">
	import '@styles/tailwind.css';
	import { onMount } from 'svelte';

	onMount(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		import('@zachleat/browser-window');
	});
</script>

<slot />

<style lang="postcss">
	:global(html) {
		scrollbar-gutter: stable;
	}
	:global(body) {
		padding: theme(padding.4);
	}
</style>
