{#await Promise.resolve()}
	<slot name="fallback" />
{:then}
	<slot />
{/await}
