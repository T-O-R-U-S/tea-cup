<script>
	import { tea_level, tea_fill, tea_target } from '$lib/stores';

	export let height = Math.min(Math.floor(100 * $tea_fill / $tea_target), 100);

	tea_fill.subscribe(() => {
		height = Math.min(Math.floor(100 * $tea_fill / $tea_target), 100);
	})
</script>

<a href="/" class="fixed left-5 bottom-5">
	<div
		class="border-black border-8 aspect-square h-48 rounded-full overflow-clip bg-clip-border flex flex-col items-center justify-center bg-white shadow-xl">
		<h4>Your teacup</h4>
		<div
			class="h-1/2 w-1/2 border-8 border-t-0 rounded-t-none border-black rounded-b-full justify-end items-center flex text-black flex-col overflow-clip">
			<div class="h-1/2 rounded-b-full bg-green-200 w-full border-4 border-white flex items-center justify-center font-bold" id="tea" style:height="{height}%">
				<span class="-translate-y-5">{height}%</span>
			</div>
		</div>

	</div>
</a>


