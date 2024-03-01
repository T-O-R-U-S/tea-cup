<main>
	<div id="content">
		<h1 class="p-5 py-20">Welcome to Tea Cup 🍵</h1>

		<h3>Here are your pinned subjects.</h3>
		<br>

		<nav class="flex space-x-10">
			<a class="bg-yellow-50 text-amber-600 card" href="/gcse/psychology">
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45c-.19.47-.58.84-1.06 1l-.79.25a1.687 1.687 0 0 1-1.86-.55L14.44 18c-.89-.15-1.73-.53-2.44-1.1c-.5.15-1 .23-1.5.23c-.88 0-1.76-.27-2.5-.79c-.53.16-1.07.23-1.62.22c-.79.01-1.57-.15-2.3-.45a4.105 4.105 0 0 1-2.43-3.61c-.08-.72.04-1.45.35-2.11c-.29-.75-.32-1.57-.07-2.33C2.3 7.11 3 6.32 3.87 5.82c.58-1.69 2.21-2.82 4-2.7c1.6-1.5 4.05-1.66 5.83-.37c.42-.11.86-.17 1.3-.17c1.36-.03 2.65.57 3.5 1.64c2.04.53 3.5 2.35 3.58 4.47c.05 1.11-.25 2.2-.86 3.13c.07.36.11.72.11 1.09m-5-1.41c.57.07 1.02.5 1.02 1.07a1 1 0 0 1-1 1h-.63c-.32.9-.88 1.69-1.62 2.29c.25.09.51.14.77.21c5.13-.07 4.53-3.2 4.53-3.25a2.592 2.592 0 0 0-2.69-2.49a1 1 0 0 1-1-1a1 1 0 0 1 1-1c1.23.03 2.41.49 3.33 1.3c.05-.29.08-.59.08-.89c-.06-1.24-.62-2.32-2.87-2.53c-1.25-2.96-4.4-1.32-4.4-.4c-.03.23.21.72.25.75a1 1 0 0 1 1 1c0 .55-.45 1-1 1c-.53-.02-1.03-.22-1.43-.56c-.48.31-1.03.5-1.6.56c-.57.05-1.04-.35-1.07-.9a.968.968 0 0 1 .88-1.1c.16-.02.94-.14.94-.77c0-.66.25-1.29.68-1.79c-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2C4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25c.5.19.78.75.59 1.29c-.19.52-.77.78-1.29.59c-.73-.32-1.55-.34-2.3-.06c-.32.27-.32.83-.32 1.27c0 .74.37 1.43 1 1.83c.53.27 1.12.41 1.71.4c-.15-.26-.28-.53-.39-.81a1.038 1.038 0 0 1 1.96-.68c.4 1.14 1.42 1.92 2.62 2.05c1.37-.07 2.59-.88 3.19-2.13c.23-1.38 1.34-1.5 2.56-1.5m2 7.47l-.62-1.3l-.71.16l1 1.25zm-4.65-8.61a1 1 0 0 0-.91-1.03c-.71-.04-1.4.2-1.93.67c-.57.58-.87 1.38-.84 2.19a1 1 0 0 0 1 1c.57 0 1-.45 1-1c0-.27.07-.54.23-.76c.12-.1.27-.15.43-.15c.55.03 1.02-.38 1.02-.92"
						fill="currentColor" />
				</svg>
				<b class="p-2">Psychology</b>
			</a>

			<a class="bg-cyan-50 text-sky-600 card" href="/gcse/psychology">
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
								fill="currentColor" />
				</svg>
				<b class="p-2">Comp Sci.</b>
			</a>
		</nav>

		<div class="flex flex-col items-center justify-center aspect-video shadow-md bg-white rounded-xl border-black border-8 my-20 p-4">
			<h2 class="py-20">Today, your cup is... <span class="text-emerald-400">half-full</span>!</h2>

			<div class="aspect-square h-48 border-8 border-t-0 rounded-t-none p-1 rounded-xl border-black justify-stretch flex flex-col">
				<div class="h-full m-1 rounded-t-none"></div>
				<div class="h-full m-1"></div>
				<div class="bg-amber-950 h-full m-1"></div>
				<div class="bg-amber-950 h-full m-1 rounded-b-md"></div>
			</div>
		</div>

	</div>
</main>

<style>
    main {
        @apply h-screen w-screen overflow-y-scroll overflow-x-hidden bg-slate-200 flex;
    }

    .card {
        @apply aspect-square w-32 rounded-xl border-white border-8 outline outline-4 outline-gray-900 shadow-md transition-all;
    }

    .card:hover {
        @apply rotate-6;
    }

    /*
    nav {
        @apply flex flex-col h-screen p-5 w-96 bg-slate-50 text-3xl;
    }
    */

    #content {
        @apply flex flex-col items-center w-full h-full;
    }
</style>