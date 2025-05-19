<script lang="ts">
	let { data } = $props();
</script>

<form data-sveltekit-keepfocus>
	<input
		autocomplete="off"
		class="shadow-md w-full p-2 border-[1px] border-slate-200"
		name="search"
		oninput={(e) => {
			if (e.target instanceof HTMLInputElement) {
				e.target.form?.requestSubmit();
			}
		}}
	/>
</form>

<ul>
	{#each data.ambassadors as ambassador}
		<li>{ambassador}</li>
	{/each}
</ul>
