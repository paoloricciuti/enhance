<script lang="ts">
	import { createCombobox, type ComboboxOptionProps } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';
	import type { Tutorial } from './tutorials';

	export let options: Array<Tutorial>;
	export let name = '';

	const toOption = (tutorial: Tutorial): ComboboxOptionProps<Tutorial> => ({
		value: tutorial,
		label: tutorial.title
	});

	const {
		elements: { menu, input, option },
		states: { open, inputValue, touchedInput, selected }
	} = createCombobox<Tutorial>({
		forceVisible: true,
		defaultSelected: toOption(options[0])
	});

	$: if (!$open) {
		$inputValue = $selected?.label ?? '';
	}

	$: filteredOptions = $touchedInput
		? options.filter(({ title, section }) => {
				const normalizedInput = $inputValue.toLowerCase();
				return (
					title.toLowerCase().includes(normalizedInput) ||
					section.toLowerCase().includes(normalizedInput)
				);
		  })
		: options;
</script>

<div class="input-label-wrapper">
	<input {name} {...$input} use:input class="input" placeholder="Best book ever" />
</div>
{#if $open}
	<ul class="list" {...$menu} use:menu transition:fly={{ duration: 150, y: -5 }}>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div class="list-wrapper" tabindex="0">
			{#each filteredOptions as manga, index (index)}
				<li {...$option(toOption(manga))} use:option class="item">
					<div class="item-description">
						<span style="font-weight: 500">{manga.title}</span>
						<span style="font-size: .75rem; opacity: .75">{manga.section}</span>
					</div>
				</li>
			{/each}
		</div>
	</ul>
{/if}

<style>
	.input-label-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
		position: relative;
	}
	.input {
		all: unset;
		appearance: none;
		display: inline;
		border-radius: 0.25rem;
		background-color: white;
		padding: 1rem;
		padding-block: 0.5rem;
		color: black;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid black;
	}
	.input-label-wrapper::after {
		content: '▼';
		position: absolute;
		right: 0.5rem;
		top: 50%;
		transform: translateY(-50%);
	}
	.list {
		z-index: 10;
		display: flex;
		max-height: 300px;
		flex-direction: column;
		overflow: hidden;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.list-wrapper {
		display: flex;
		max-height: 100%;
		flex-direction: column;
		gap: 0;
		overflow-y: auto;
		background-color: white;
		color: black;
	}
	.item {
		position: relative;
		cursor: pointer;
		padding-block: 0.5rem;
		padding-inline: 1rem;
	}
	.item:hover {
		background-color: #777777;
	}
	.item-description {
		display: flex;
		flex-direction: column;
	}
	[data-highlighted] {
		background-color: #ddd;
	}
	[data-disabled] {
		opacity: 0.5;
	}
</style>
