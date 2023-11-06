<script lang="ts">
	import { browser } from '$app/environment';

	function presenter(video: HTMLVideoElement) {
		(async () => {
			if (navigator.mediaDevices.getUserMedia) {
				try {
					const stream = await navigator.mediaDevices.getUserMedia({ video: true });
					video.srcObject = stream;
				} catch (e) {
					/**empty*/
				}
			}
		})();
	}
	let top = 20;
	let left = 20;
	let scale = 1;
	let updating: null | { x: number; y: number } = null;

	const active = browser && new URLSearchParams(window.location.search).get('presenter') !== null;
</script>

{#if active}
	<video
		on:mousedown={(e) => {
			updating = {
				x: e.pageX,
				y: e.pageY
			};
		}}
		on:mouseup={() => {
			updating = null;
		}}
		on:mousemove={(e) => {
			if (!updating) return;
			const { pageX, pageY } = e;
			left += pageX - updating.x;
			top += pageY - updating.y;
			updating = {
				x: pageX,
				y: pageY
			};
		}}
		on:wheel={(e) => {
			if (e.deltaY > 0) {
				scale += 0.1;
			} else {
				scale -= 0.1;
			}
		}}
		autoplay
		playsinline
		muted
		style:--top="{top}px"
		style:--left="{left}px"
		style:--scale={scale}
		class="z-50 rounded-full cursor-pointer object-cover fixed top-[--top] left-[--left] aspect-square w-1/5 transform scale-[--scale]"
		use:presenter
	>
		<track kind="captions" />
	</video>
{/if}
