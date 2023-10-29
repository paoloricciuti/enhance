import type Slide from '@lib/components/slide.svelte';
import type { ComponentProps, SvelteComponent } from 'svelte';

export type Props<T extends SvelteComponent = Slide> = ComponentProps<T>;
