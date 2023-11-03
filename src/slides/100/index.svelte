<script context="module" lang="ts">
	import type { Props } from '@slides/types';
	import enhance from './enhance.gif';
	import Notes from '@lib/components/notes.svelte';

	export const props: Props = {
		image: enhance
	};
</script>

<Notes>
	This is the classic situation in a TV series: the police need to catch the bad guy but they only
	have a blurred frame from CCTV. So the main one ask the tech guy "Zoom in! Enhance". This is not
	something that would ever happen but if you work with me it might happen that i tell you to
	Enhance something! Before you move on with your life asking yourself why this weirdo like the work
	enhance so much allow me to introduce myself...
</Notes>
<p class="font-bold text-6xl">Enhance!</p>
