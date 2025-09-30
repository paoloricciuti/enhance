<script lang="ts">
	import Code from '@lib/components/code.svelte';
	import Slide from '@lib/components/slide.svelte';
</script>

<Slide>
	<div class="flex gap-4 text-3xl">
		<Code file="+page.server.ts" lang="ts">
			{`export function load({ fetch, url }) {
	// load your data here
	return {
		some_data: 'hello world'
	};
}

export const actions = {
	async change({ request, fetch }) {
		// handle your form submission here
	}
}
`}
		</Code>
		<Code file="+page.svelte" lang="svelte">
			{`<scr` +
				`ipt lang="ts">
	import { enhance } from '$app/forms';	
	let { data } = $props();
<\/script>

{data.some_data}

<form 
	method="POST"
	use:enhance
	action="?/change"
>
	<input name="some_input" />
	<button type="submit">Submit</button>
</form>
`}
		</Code>
	</div>
</Slide>
<Slide>
	<div class="flex gap-4 text-3xl">
		<Code file="my_data.remote.ts" lang="ts">
			{`import { query, form } from '$app/remote';
import * as v from 'valibot';

export const some_data = query(() => {
	// load your data here
	return 'hello world';
});

export const change = form(
	v.object({ 
		some_input: v.string(),
	}), async ({ some_input }) => {
	// handle your form submission here
});
`}
		</Code>
		<Code file="+page.svelte" lang="svelte">
			{`<scr` +
				`ipt lang="ts">
	import { 
		some_data, 
		change 
	} from './my_data.remote.js';
<\/script>

{await some_data()}

<form {...change}>
	<input name={change.field('some_input')} />
	<button type="submit">Submit</button>
</form>
`}
		</Code>
	</div>
</Slide>
