<script lang="ts">
	import { enhance } from '$app/forms';
	import InputAutocomplete from './InputAutocomplete.svelte';

	export let form;
</script>

<form use:enhance method="post" class="grid gap-2">
	<InputAutocomplete />
	<button class="w-full bg-gradient-to-br font-bold from-orange-400 to-orange-500 rounded-md"
		>Search</button
	>
</form>

{#if form?.success}
	{#if form.show}
		{form.show.title}
		<img src={form.show.url} alt={form.show.title} />
	{:else}
		No video found :(
	{/if}
{/if}
