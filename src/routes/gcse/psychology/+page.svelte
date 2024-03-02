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

	<ul class="grid grid-cols-2 gap-3">
		<li><a href="/gcse/psychology/brain_neuropsychology/0">Brain and Neuropsychology</a></li>
		<li>Social Influence</li>
		<li>Research Method</li>
		<li>Perception</li>
		<li>Development</li>
		<li>Social Influence</li>
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