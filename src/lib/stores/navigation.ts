import { writable } from 'svelte/store';

export const navigation = writable({
	// slide number from the URL
	hash: null as string | null,
	// current slide
	currentSlide: null as number | null,
	// horizontal, vertical slide number and fragment
	indices: null as { h: number; v: number; f: number } | null,
	// available navigation
	availableRoutes: null as Record<'down' | 'left' | 'up' | 'right', boolean> | null
});
