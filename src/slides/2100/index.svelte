<script module lang="ts">
	export const props: Props = {
		animate: true
	};
</script>

<script lang="ts">
	import Code from '@lib/components/code.svelte';
	import Compare from '@lib/components/compare.svelte';
	import type { Props } from '@slides/types';
</script>

<div class="grid gap-8 text-2xl">
	<div class="flex">
		<Code file="+layout.svelte" lang="svelte">
			{`<form
	use:enhance={() => {
		return ({ result, update }) => {
			if (result.type === 'success') {
				alert('Subscribed!');
				update();
			}
		};
	}}
	method="post"
	action="/subscribe"
>
	<input
		name="mail"
		autocomplete="off"
	/>
	<button>Join</button>
</form>
`}
		</Code>
		<div>
			<Code file="/subscribe/+page.server.ts" lang="ts">
				{`export const actions: Actions = {
	async default(){
		// do your subscription
	}
}
`}
			</Code>
			<Code file="/subscribe/+page.svelte" lang="svelte">
				{`Thanks for subscribing!
`}
			</Code>
		</div>
	</div>
	<Compare title="Dialog" src="/layout-form-right"></Compare>
</div>
