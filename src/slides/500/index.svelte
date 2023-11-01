<script lang="ts">
	import Code from '@lib/components/code.svelte';
</script>

<div class="text-2xl flex gap-2">
	<Code file="+page.svelte" lang="svelte">
		{`<script lang="ts">
	import { enhance } from '$app/forms';
	import InputAutocomplete from './InputAutocomplete.svelte';

	export let form;
</scr` +
			`ipt>

<form>
	<InputAutocomplete></InputAutocomplete>
	<button>Search</button>
</form>

{#if 'show' in data}
	{#if data.show}
		{data.show.title}
		<img src={data.show.url} alt={data.show.title} />
	{:else}
		No video found :(
	{/if}
{/if}
`}
	</Code>
	<Code file="InputAutocomplete.svelte" lang="svelte">
		{`<script lang="ts">
	let suggestions: string[] = [];
	async function fectch_suggestions() {
		suggestions = await fetch(\`./autocomplete?query=\${value}\`)
				.then((res) => res.json());
	}
	let value = '';
</scr` +
			`ipt>

<div class="relative">
	<input
		autocomplete="off"
		name="search"
		bind:value
		on:input={fectch_suggestions}
	>
	<ul>
		{#each suggestions as suggestion}
			<li><button on:click={() => {
				value = suggestion;
				suggestions = [];
			}}>
				{suggestion}
			</button>
			</li>
		{/each}
	</ul>
</div>
`}
	</Code>
</div>
