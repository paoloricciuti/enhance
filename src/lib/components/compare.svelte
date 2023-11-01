<script lang="ts">
	export let title: string;
	export let src: string;
	export let vertical = false;
</script>

<div
	class:vertical
	class:grid-cols-2={!vertical}
	class:grid-rows-2={vertical}
	class="grid gap-4 min-h-full place-items-center"
>
	<iframe {title} {src}></iframe>
	<iframe {title} {src} sandbox="allow-forms"></iframe>
</div>

<style lang="postcss">
	iframe {
		border: 1px solid white;
		width: 100%;
		aspect-ratio: 16/9;
		border-radius: theme(borderRadius.lg);
		padding: theme(padding.4);
		background-color: white;
	}
	.vertical iframe {
		width: unset;
		height: 100%;
	}
</style>
