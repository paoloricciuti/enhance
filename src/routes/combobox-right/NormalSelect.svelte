<script lang="ts">
	import type { Tutorial } from './tutorials';

	interface Props {
		options: Array<Tutorial>;
		name?: string;
	}

	let { options, name = '' }: Props = $props();
</script>

<div class="wrapper">
	<select {name}>
		{#each options as option}
			<option value={option.title}>{option.title}</option>
		{/each}
	</select>
</div>

<style>
	.wrapper {
		position: relative;
		width: 100%;
	}
	select {
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
	.wrapper::after {
		content: '▼';
		position: absolute;
		right: 0.5rem;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
