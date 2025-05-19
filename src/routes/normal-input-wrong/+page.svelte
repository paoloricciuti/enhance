<script lang="ts">
	import InputAutocomplete from './InputAutocomplete.svelte';

	let { data } = $props();
</script>

<form class="grid gap-2">
	<InputAutocomplete />
	<button class="w-full bg-gradient-to-br font-bold from-orange-400 to-orange-500 rounded-md"
		>Search</button
	>
</form>

{#if 'show' in data}
	{#if data.show}
		{data.show.title}
		<img src={data.show.url} alt={data.show.title} />
	{:else}
		No video found :(
	{/if}
{/if}
