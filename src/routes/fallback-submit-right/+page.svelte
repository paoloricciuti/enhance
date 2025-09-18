<script lang="ts">
	let { data } = $props();
</script>

<form class="flex gap-2" data-sveltekit-keepfocus>
	<input
		autocomplete="off"
		class="shadow-md w-full p-2 border-[1px] border-slate-200"
		name="search"
		oninput={(e) => {
			if (e.target instanceof HTMLInputElement) {
				e.target.form?.requestSubmit();
			}
		}}
	/><button aria-label="Submit"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
			/>
		</svg>
	</button>
</form>

<ul>
	{#each data.ambassadors as ambassador}
		<li>{ambassador}</li>
	{/each}
</ul>
