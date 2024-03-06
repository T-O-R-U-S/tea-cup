<script lang="ts">
	import { slide } from 'svelte/transition';

	export let chat_gpt_out: any;
	export let question: any;

	export let idx: number;

	if (question.type === 'set') {
		question = question.questions[idx];
	}
</script>

<div class="mt-10 text-center" transition:slide={{ delay: 250, duration: 300, axis: 'x' }}>
	{#if chat_gpt_out.comments}
		<div
			class="mt-6 flex rotate-6 items-center justify-center rounded-xl border-8 border-black p-5 text-slate-500 shadow-xl outline outline-8 outline-white"
		>
			<div class="flex -rotate-6 flex-col items-center justify-center">
				<h3 class="flex items-center justify-center px-4 font-black text-slate-950">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M3.5 19A1.5 1.5 0 0 1 5 20.5A1.5 1.5 0 0 1 3.5 22A1.5 1.5 0 0 1 2 20.5A1.5 1.5 0 0 1 3.5 19m5-3a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 8.5 21A2.5 2.5 0 0 1 6 18.5A2.5 2.5 0 0 1 8.5 16m6-1c-1.19 0-2.27-.5-3-1.35c-.73.85-1.81 1.35-3 1.35c-1.96 0-3.59-1.41-3.93-3.26A4.02 4.02 0 0 1 2 8a4 4 0 0 1 4-4c.26 0 .5.03.77.07C7.5 3.41 8.45 3 9.5 3c1.19 0 2.27.5 3 1.35c.73-.85 1.81-1.35 3-1.35c1.96 0 3.59 1.41 3.93 3.26A4.02 4.02 0 0 1 22 10a4 4 0 0 1-4 4l-.77-.07c-.73.66-1.68 1.07-2.73 1.07"
						/>
					</svg>
					Comments...
				</h3>
				<span class="max-w-64 text-2xl font-bold">{chat_gpt_out.comments}</span>
			</div>
		</div>
	{/if}
	{#if chat_gpt_out.tips}
		<div
			class="flex -rotate-6 items-center justify-center rounded-xl border-8 border-amber-800 bg-amber-200 p-5 text-slate-500 shadow-xl outline outline-8 outline-white"
		>
			<div class="flex rotate-6 flex-col items-center justify-center">
				<h3 class="flex items-center justify-center px-4 font-black text-amber-950">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M10 2C6.1 2 3 5.1 3 9c0 2.4 1.2 4.5 3 5.7V17c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.3c1.8-1.3 3-3.4 3-5.7c0-3.9-3.1-7-7-7M7 21c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-1H7zm12-9V7h2v6h-2m0 4v-2h2v2z"
						/>
					</svg>
					Tips
				</h3>
				<span class="max-w-64 text-2xl font-bold text-amber-700">{chat_gpt_out.tips}</span>
			</div>
		</div>
	{/if}
	{#if chat_gpt_out.praise || chat_gpt_out.mark === question.marks}
		<div
			class="flex rotate-3 items-center justify-center rounded-xl border-8 border-emerald-800 bg-emerald-200 p-5 text-slate-500 shadow-xl outline outline-8 outline-white"
		>
			<div class="flex -rotate-3 flex-col items-center justify-center">
				<h3 class="flex items-center justify-center px-4 font-black text-emerald-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
						<path
							fill="currentColor"
							d="M336 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16s16 7.2 16 16m-98.7 7.1l32 48c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-32-48c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4M135 119c9.4-9.4 24.6-9.4 33.9 0l123.8 123.7c10.1 10.1 27.3 2.9 27.3-11.3V192c0-17.7 14.3-32 32-32s32 14.3 32 32v153.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l53 53c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l93 93c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L55 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l117 117c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9zm298.1 365.9c-24.2 14.5-50.9 22.1-77.7 23.1c48.1-39.6 76.6-99 76.6-162.4v-98.1c8.2-.1 16-6.4 16-16V192c0-17.7 14.3-32 32-32s32 14.3 32 32v153.6c0 57.1-30 110-78.9 139.4zm-8.2-466.2c7.4 4.9 9.3 14.8 4.4 22.2l-32 48c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l32-48c4.9-7.4 14.8-9.3 22.2-4.4"
						/>
					</svg>
					Praise
				</h3>
				<span class="max-w-64 text-2xl font-bold text-emerald-700"
					>{chat_gpt_out.praise ? chat_gpt_out.praise : 'Well done! All correct.'}</span
				>
			</div>
		</div>
	{/if}
	{#if chat_gpt_out.error}
		<div
			class="flex rotate-3 items-center justify-center rounded-xl border-8 border-red-800 bg-red-200 p-5 text-slate-500 shadow-xl outline outline-8 outline-white"
		>
			<div class="flex -rotate-3 flex-col items-center justify-center">
				<h3 class="flex items-center justify-center px-4 font-black text-pink-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.616 3.642c1.058-1.839 3.71-1.839 4.768 0l8.043 13.988c1.054 1.833-.27 4.12-2.384 4.12H3.957c-2.115 0-3.438-2.287-2.384-4.12zM12 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m.568 9.25a.75.75 0 0 0-1.115-1.003l-.01.011a.75.75 0 0 0 1.114 1.004z" clip-rule="evenodd"/></svg>
					Whoops! Something went wrong.
				</h3>
				<span class="max-w-64 text-2xl font-bold text-red-700"
					>{chat_gpt_out.error}</span
				>
			</div>
		</div>
	{/if}
	{#if !chat_gpt_out.error}
	<div
		class="mt-10 rounded-xl border-8 border-red-700 bg-red-200 p-5 text-red-800 shadow-xl outline outline-8 outline-white"
	>
		<h2>{chat_gpt_out.mark || 0} out of {question.marks}</h2>
	</div>
	{/if}
</div>
