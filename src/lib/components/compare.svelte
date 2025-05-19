<script lang="ts">
	interface Props {
		title: string;
		src: string;
		vertical?: boolean;
	}

	let { title, src, vertical = false }: Props = $props();
</script>

<div
	class:vertical
	class:grid-cols-2={!vertical}
	class:grid-rows-2={vertical}
	class="grid gap-4 min-h-full place-items-center"
>
	<browser-window
		shadow
		url="https://js"
		style="--bw-background: #eee; --bw-shadow-hsl: 0deg 0% 0%"
	>
		<iframe {title} {src}></iframe>
	</browser-window>
	<browser-window
		shadow
		url="https://no-js"
		style="--bw-background: #eee; --bw-shadow-hsl: 0deg 0% 0%"
	>
		<iframe {title} {src} sandbox="allow-forms"></iframe>
	</browser-window>
</div>

<style lang="postcss">
	iframe {
		border: 1px solid white;
		width: 100%;
		aspect-ratio: 16/9;
		background-color: white;
	}
	.vertical iframe {
		width: unset;
		height: 100%;
	}
</style>
