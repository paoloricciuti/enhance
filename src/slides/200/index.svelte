<script lang="ts">
	import Step from '@lib/components/step.svelte';
	import me from './me.jpg';
	import subscription from './subscription.png';
	import workshops from './workshops.png';
	import Notes from '@lib/components/notes.svelte';
</script>

<Notes>Don't forget to mention why you will ask to enhance!</Notes>

<div class="flex w-full justify-between p-8">
	<ul class="text-left text-2xl w-full">
		<li>👋 Paolo Ricciuti</li>
		<Step>
			<li>🍕 Campobasso, Italy</li>
		</Step>
		<Step>
			<li class="flex items-center gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					preserveAspectRatio="xMidYMid"
					viewBox="0 0 256 226"
					><path
						fill="#1185FE"
						d="M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686 11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068-9.138 32.654-42.436 40.983-72.057 35.942 51.775 8.812 64.946 38 36.501 67.187-54.021 55.433-77.644-13.908-83.696-31.676-1.11-3.257-1.63-4.78-1.637-3.485-.008-1.296-.527.228-1.637 3.485-6.052 17.768-29.675 87.11-83.696 31.676-28.445-29.187-15.274-58.375 36.5-67.187-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116 0-13.028 34.314-.727 55.491 15.172Z"
					/></svg
				>
				@paolo.ricciuti.me on bsky
			</li>
		</Step>
		<Step>
			<li class="flex items-center gap-1">
				<svg
					height="24"
					width="24"
					aria-hidden="true"
					viewBox="0 0 18 18"
					version="1.1"
					data-view-component="true"
					class="octicon octicon-mark-github v-align-middle"
					xmlns="http://www.w3.org/2000/svg"
				>
					<ellipse
						style="stroke: rgb(0, 0, 0); stroke-width: 0px; fill: rgb(255, 255, 255);"
						cx="9"
						cy="9"
						rx="9"
						ry="9"
					></ellipse>
					<path
						d="M 9 1.197 C 13.42 1.197 17 4.777 17 9.197 C 16.999 12.634 14.806 15.688 11.55 16.787 C 11.15 16.867 11 16.617 11 16.407 C 11 16.137 11.01 15.277 11.01 14.207 C 11.01 13.457 10.76 12.977 10.47 12.727 C 12.25 12.527 14.12 11.847 14.12 8.777 C 14.12 7.897 13.81 7.187 13.3 6.627 C 13.38 6.427 13.66 5.607 13.22 4.507 C 13.22 4.507 12.55 4.287 11.02 5.327 C 10.38 5.147 9.7 5.057 9.02 5.057 C 8.34 5.057 7.66 5.147 7.02 5.327 C 5.49 4.297 4.82 4.507 4.82 4.507 C 4.38 5.607 4.66 6.427 4.74 6.627 C 4.23 7.187 3.92 7.907 3.92 8.777 C 3.92 11.837 5.78 12.527 7.56 12.727 C 7.33 12.927 7.12 13.277 7.05 13.797 C 6.59 14.007 5.44 14.347 4.72 13.137 C 4.57 12.897 4.12 12.307 3.49 12.317 C 2.82 12.327 3.22 12.697 3.5 12.847 C 3.84 13.037 4.23 13.747 4.32 13.977 C 4.48 14.427 5 15.287 7.01 14.917 C 7.01 15.587 7.02 16.217 7.02 16.407 C 7.02 16.617 6.87 16.857 6.47 16.787 C 3.202 15.7 0.998 12.641 1 9.197 C 1 4.777 4.58 1.197 9 1.197 Z"
					></path>
				</svg> @paoloricciuti on github
			</li>
		</Step>
		<Step>
			<li class="flex items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 107 128"
					><title>svelte-logo</title><path
						d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157"
						style="fill:#ff3e00"
					/><path
						d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287"
						style="fill:#fff"
					/></svg
				> Svelte Ambassador and Maintainer
			</li>
		</Step>
		<Step>
			<li>👨🏻‍💻 Senior Software Engineer at Mainmatter</li>
		</Step>
	</ul>
	<div class="flex flex-col items-center gap-8 w-[90%]">
		<div class="flex h-1/5 gap-4 justify-between">
			<img
				class="h-full w-full object-contain"
				src={subscription}
				alt="QR code for svelte subscription"
			/>
			<div class="workshops h-full w-full grid relative grid-cols-1 grid-rows-1">
				<Step class="absolute right-0 -z-10">
					<div
						class="text-gray-50 bg-[#ff3e00] grid place-items-center right-0 font-bold text-xl p-4 rounded-lg font-mono"
					>
						TECHCAMP25
					</div>
				</Step>
				<img class="h-full w-full object-contain" src={workshops} alt="QR code for workshops" />
			</div>
		</div>
		<img class="rounded-full h-1/3" src={me} alt="Paolo Ricciuti" />
	</div>
</div>

<style>
	.workshops :global(.fragment) {
		transform-origin: 0 0;
		transform: rotate(90deg) translateX(110%);
	}
	.workshops :global(.fragment.visible) {
		transform: rotate(0deg) translateX(110%);
	}
</style>
