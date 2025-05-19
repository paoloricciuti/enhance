<script lang="ts">
	import '@styles/tailwind.css';
	import { onMount } from 'svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	onMount(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		import('@zachleat/browser-window');
	});
</script>

{@render children?.()}

<style lang="postcss">
	:global(html) {
		scrollbar-gutter: stable;
	}
	:global(body) {
		padding: theme(padding.4);
	}
</style>
