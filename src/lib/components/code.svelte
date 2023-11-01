<script lang="ts">
	type Lines = string | boolean | null;
	type Offset = string | null;
	type Language = string | null;

	export let id = 'code-animation';
	export let lines: Lines = true;
	export let offset: Offset = null;
	export let lang: Language = null;
	export let file: string | null = '';

	delete $$restProps.class;
</script>

<pre data-id={id} class={$$props.class || ''} {...$$restProps}>
{#if file}<p class="border-b-[1px] border-white"><span
				class="border-[1px] p-1 px-4 inline-block border-white border-b-0">{file}</span
			></p>{/if}
  <code
		data-trim
		data-line-numbers={lines || null}
		data-ln-start-from={offset}
		class="language-{lang}">
<slot />
  </code>
</pre>
