<script lang="ts">
	import Code from '@lib/components/code.svelte';
	import Notes from '@lib/components/notes.svelte';
</script>

<Notes>Explain `+page.svelte`;</Notes>

<div class="text-2xl flex gap-2">
	<Code file="+page.svelte" lang="svelte">
		{`<script lang="ts">
	import InputAutocomplete from './InputAutocomplete.svelte';

	let { data } = $props();
<\/script>

<form>
	<InputAutocomplete /\>
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
	let suggestions: string[] = $state([]);
	async function fetch_suggestions() {
		suggestions = await fetch(\`./autocomplete?query=\${value}\`)
				.then((res) => res.json());
	}
	let value = $state('');
</scr` +
			`ipt>

<div class="relative">
	<input
		autocomplete="off"
		name="search"
		bind:value
		oninput={fetch_suggestions}
	/\>
	<ul>
		{#each suggestions as suggestion}
			<li><button onclick={() => {
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
