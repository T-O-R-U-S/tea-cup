<script>
</script>

<main class="w-screen h-screen overflow-x-hidden overflow-y-scroll bg-yellow-50 flex flex-col items-center pt-40">
	<div class="sweep transition-all bg-amber-400 flex absolute top-0 left-0 overflow-x-visible w-max pt-40 pb-1 -mt-36 -ml-20">
		{#each new Array(8) as _}
			<h2 class="mx-5 text-center">Welcome to Psychology 🧠</h2>
		{/each}
	</div>

	<h1>Let's Brain Train.</h1>

	<h3 class="my-5">Select a Topic.</h3>

	<ul class="grid grid-cols-2 gap-3 *:bg-white *:p-5 *:font-bold *:text-center *:rounded-xl *:outline *:outline-white *:border-4 *:shadow-xl *:border-black *:outline-4 *:transition-all">
		<li class="rotate-2 hover:scale-150 hover:z-10">Brain and Neuropsychology</li>
		<li class="-rotate-6 hover:scale-150 hover:z-10">Social Influence</li>
		<li class="-rotate-3 hover:scale-150 hover:z-10">Research Method</li>
		<li class="rotate-3 hover:scale-150 hover:z-10"><a href="/gcse/psychology/memory_perception/0">Memory and Perception</a></li>
		<li class="rotate-2 hover:scale-150 hover:z-10">Development</li>
		<li class="rotate-1 hover:scale-150 hover:z-10">Social Influence</li>
	</ul>
</main>

<style>
	.sweep {
			--rotation: -2deg;

			transform: rotate(var(--rotation)) translate(-25%, 0%) ;
			animation-name: swipe;
			animation-duration: 4s;
			transition: all;
	}

	@keyframes swipe {
			from {
					transform: rotate(var(--rotation)) translate(-25%, 0%);
			}
			to {
					transform: rotate(var(--rotation)) translate(0%, 0%);
			}
  }

  .card {
      @apply aspect-square w-32 rounded-xl border-white border-8 outline outline-4 outline-gray-900 shadow-md transition-all;
  }

  .card:hover {
      @apply rotate-6;
  }
</style>