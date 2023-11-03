<script lang="ts">
	import { enhance } from '$app/forms';
	const links = ['home', 'about', 'contact'];
</script>

<nav>
	<ul class="flex gap-2 justify-evenly">
		{#each links as link}
			<a href="/layout-form-right/{link}">{link}</a>
		{/each}
	</ul>
</nav>
<hr />
<main class="p-4">
	<slot />
</main>
<hr />
<p class="text-center">Join my newsletter</p>
<form
	use:enhance={() => {
		return ({ result, update }) => {
			if (result.type === 'success') {
				alert('Subscribed!');
				update();
			}
		};
	}}
	method="post"
	action="/layout-form-right/subscribe"
	class="flex gap-2"
>
	<input
		name="mail"
		autocomplete="off"
		class="shadow-md w-full p-2 border-[1px] border-slate-200"
	/>
	<button>Join</button>
</form>
