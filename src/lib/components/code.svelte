<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	type Lines = string | boolean | null;
	type Offset = string | null;
	type Language = string | null;

	interface Props {
		id?: string;
		lines?: Lines;
		offset?: Offset;
		lang?: Language;
		file?: string | null;
		children?: import('svelte').Snippet;
	}

	let {
		id = 'code-animation',
		lines = true,
		offset = null,
		lang = null,
		file = '',
		children,
		...rest
	}: Props & HTMLAttributes<HTMLPreElement> = $props();
</script>

<pre data-id={id} {...rest}>
{#if file}<p class="border-b-[1px] border-white"><span
				class="border-[1px] p-1 px-4 inline-block border-white border-b-0">{file}</span
			></p>{/if}
  <code
		{@attach (node) => {
			const mutation_observer = new MutationObserver((mutations, observer) => {
				if (!mutations.some((m) => [...m.addedNodes].some((node) => node.nodeName === 'TABLE')))
					return;
				const last = node.querySelector('tr:last-child');
				if (last?.textContent?.trim() === '<!---->') {
					last.remove();
				} else {
					last?.querySelector('td:last-child')?.remove();
				}
				observer.disconnect();
			});
			mutation_observer.observe(node, {
				childList: true,
				subtree: true
			});
			return () => {
				mutation_observer.disconnect();
			};
		}}
		data-trim
		data-line-numbers={lines || null}
		data-ln-start-from={offset}
		class="language-{lang}">
{@render children?.()}
  </code>
</pre>
