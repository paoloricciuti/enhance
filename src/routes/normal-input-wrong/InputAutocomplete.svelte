<script lang="ts">
	let suggestions: string[] = [];
	async function fectch_suggestions() {
		suggestions = await fetch(`./normal-input-wrong?query=${value}`).then((res) => res.json());
	}

	let value = '';
</script>

<div class="relative">
	<input name="search" class="shadow-md w-full p-2" bind:value on:input={fectch_suggestions} />
	<ul class="absolute shadow-lg bg-white w-full">
		{#each suggestions as suggestion}
			<li>
				<button
					class="text-left p-2"
					on:click={() => {
						value = suggestion;
						suggestions = [];
					}}>{suggestion}</button
				>
			</li>
		{/each}
	</ul>
</div>
