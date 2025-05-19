<script lang="ts">
	import { Presentation, Slide, Presenter } from '@components';
	import type { Props } from '@slides/types';
	import type { ComponentType, SvelteComponent } from 'svelte';
	const slides = Object.entries(
		import.meta.glob<{
			default: ComponentType<SvelteComponent>;
			component?: ComponentType<SvelteComponent>;
			props?: Props;
		}>('../slides/**/index.svelte', {
			eager: true
		})
	).toSorted(([keyA], [keyB]) => {
		const import_regex = /\.\.\/slides\/(?<num>\d+)\/index.svelte/;
		const { groups: groupsA } = keyA.match(import_regex) ?? {};
		const { groups: groupsB } = keyB.match(import_regex) ?? {};
		if (groupsA && groupsB) {
			return +groupsA.num - +groupsB.num;
		}
		return 0;
	});
</script>

<Presenter />
<Presentation>
	{#each slides as slide_arr}
		{@const [, slide] = slide_arr}
		{@const SvelteComponent_1 = slide.component ?? Slide}
		<SvelteComponent_1 {...slide.props ?? {}}>
			<slide.default />
		</SvelteComponent_1>
	{/each}
</Presentation>

<style lang="postcss">
	:global(body) {
		padding: theme(padding.0);
	}
</style>
