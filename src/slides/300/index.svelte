<script lang="ts">
	import Notes from '@lib/components/notes.svelte';
	import Step from '@lib/components/step.svelte';
</script>

<Notes>
	<ul>
		<li>Poor countries</li>
		<li>The tube</li>
		<li>Low on data</li>
		<li>Behind a firewall</li>
	</ul>
</Notes>

<div class="w-[80%] m-auto grid gap-8">
	<blockquote
		class="text-left relative before:absolute before:inset-0 before:right-auto before:-left-4 before:w-4 before:bg-white/30 pl-4"
	>
		<strong>Progressive enhancement</strong> is a strategy in web design that puts emphasis on web
		content first, allowing <Step type="span" class="custom enhance"
			>everyone to access the basic content</Step
		> and functionality of a web page, whilst users with additional browser features or faster Internet
		access receive the <Step type="span" class="custom enhance">enhanced version instead.</Step>
	</blockquote>
	<cite class="block text-left">- Wikipedia </cite>
</div>

<style>
	blockquote:has(:global(.current-fragment)) {
		color: rgb(255 255 255 / 0.3);
	}
	:global(.fragment.enhance.visible.current-fragment) {
		background-color: #ff3e00;
		color: white;
	}
</style>
