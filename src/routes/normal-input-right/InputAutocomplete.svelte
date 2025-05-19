<script lang="ts">
	let suggestions: string[] = $state([]);
	async function fectch_suggestions() {
		suggestions = await fetch(`./normal-input-wrong?query=${value}`).then((res) => res.json());
	}

	let value = $state('');
</script>

<div class="relative">
	<input
		autocomplete="off"
		name="search"
		class="shadow-md w-full p-2 border-[1px] border-slate-200"
		bind:value
		oninput={fectch_suggestions}
	/>
	<ul class="absolute shadow-lg bg-white w-full">
		{#each suggestions as suggestion}
			<li>
				<button
					class="text-left p-2"
					onclick={() => {
						value = suggestion;
						suggestions = [];
					}}>{suggestion}</button
				>
			</li>
		{/each}
	</ul>
</div>
