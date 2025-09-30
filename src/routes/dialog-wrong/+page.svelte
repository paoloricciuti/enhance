<script lang="ts">
	import { createDialog } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	const {
		elements: { trigger, overlay, content, close, portalled },
		states: { open }
	} = createDialog({});
</script>

<button
	{...$trigger}
	use:trigger
	class="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3
	font-medium leading-none text-magnum-700 shadow hover:opacity-75"
>
	Login
</button>

<div {...$portalled} use:portalled>
	{#if $open}
		<div
			{...$overlay}
			use:overlay
			class="fixed inset-0 z-50 bg-black/50"
			transition:fade={{ duration: 150 }}
		></div>
		<div
			class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
			  max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white
			  p-6 shadow-lg"
			{...$content}
			use:content
		>
			Your login here
			<button
				{...$close}
				use:close
				aria-label="close"
				class="absolute right-4 top-4 inline-flex h-6 w-6 appearance-none
				  items-center justify-center rounded-full p-1 text-magnum-800
				  hover:bg-magnum-100 focus:shadow-magnum-400"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	{/if}
</div>
