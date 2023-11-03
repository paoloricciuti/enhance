<script lang="ts">
	import MeltSelect from './MeltSelect.svelte';
	import NormalSelect from './NormalSelect.svelte';
	import NoSsr from '@lib/components/NoSSR.svelte';
	import { tutorials } from './tutorials';
</script>

<NoSsr>
	<MeltSelect options={tutorials} name="tutorial" />
	<NormalSelect slot="fallback" options={tutorials} name="tutorial" />
</NoSsr>
