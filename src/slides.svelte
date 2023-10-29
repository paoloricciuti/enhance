<script lang="ts">
	import { Presentation, Slide } from '@components';
	import type { Props } from '@slides/types';
	import type { ComponentType, SvelteComponent } from 'svelte';
	const slides = import.meta.glob<{
		default: ComponentType<SvelteComponent>;
		component?: ComponentType<SvelteComponent>;
		props?: Props;
	}>('./slides/**/index.svelte', {
		eager: true,
	});
</script>

<Presentation>
	{#each Object.values(slides) as slide}
		<svelte:component this={slide.component ?? Slide} {...slide.props ?? {}}>
			<svelte:component this={slide.default} />
		</svelte:component>
	{/each}
</Presentation>
