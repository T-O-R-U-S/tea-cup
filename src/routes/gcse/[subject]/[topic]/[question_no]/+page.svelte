<script lang="ts">
	import { page } from '$app/stores';
	import Question from '$lib/question.svelte';

	export let data;

	let question: object = data.questions[0];

	$: question = data.questions[0];

	console.log(question);

	let chat_gpt_out: any | null = null;

	$: chat_gpt_out = {
		comments: 'Here is an extended comment so that you can test yo stuff out.',
		praise: 'Here is some extended praise so that you can test yo stuff out',
		tips: 'Here is an extended tip so that you can test yo stuff out.',
		mark: 2
	};

	let debug: boolean = true;

	let answer: any;

	async function send_req() {
		console.log(answer);

		chat_gpt_out = await fetch($page.url, {
			method: "PUT",
			body: JSON.stringify(answer)
		})
			.then(t => t.json())
			.then(t => JSON.parse(t.message.content))
	}
</script>

<main class="flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden overflow-y-hidden">
	{#if chat_gpt_out}
		<div class="text-center mt-auto" id="">
			{#if chat_gpt_out.comments}
				<div
					class="border-black border-8 outline-white outline-8 shadow-xl outline text-slate-500 rounded-xl p-5 flex items-center justify-center rotate-6">
					<div class="-rotate-6 flex flex-col items-center justify-center">

						<h3 class="px-4 flex items-center justify-center font-black text-slate-950">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
								<path fill="currentColor"
											d="M3.5 19A1.5 1.5 0 0 1 5 20.5A1.5 1.5 0 0 1 3.5 22A1.5 1.5 0 0 1 2 20.5A1.5 1.5 0 0 1 3.5 19m5-3a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 8.5 21A2.5 2.5 0 0 1 6 18.5A2.5 2.5 0 0 1 8.5 16m6-1c-1.19 0-2.27-.5-3-1.35c-.73.85-1.81 1.35-3 1.35c-1.96 0-3.59-1.41-3.93-3.26A4.02 4.02 0 0 1 2 8a4 4 0 0 1 4-4c.26 0 .5.03.77.07C7.5 3.41 8.45 3 9.5 3c1.19 0 2.27.5 3 1.35c.73-.85 1.81-1.35 3-1.35c1.96 0 3.59 1.41 3.93 3.26A4.02 4.02 0 0 1 22 10a4 4 0 0 1-4 4l-.77-.07c-.73.66-1.68 1.07-2.73 1.07" />
							</svg>
							Comments...
						</h3>
						<span class="max-w-64 text-2xl font-bold">{chat_gpt_out.comments}</span>
					</div>
				</div>
			{/if}
			{#if chat_gpt_out.tips}
				<div
					class="bg-amber-200 border-amber-800 border-8 outline-white outline-8 shadow-xl outline text-slate-500 rounded-xl p-5 flex items-center justify-center -rotate-6">
					<div class="rotate-6 flex flex-col items-center justify-center">

						<h3 class="px-4 flex items-center justify-center font-black text-amber-950">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
								<path fill="currentColor"
											d="M10 2C6.1 2 3 5.1 3 9c0 2.4 1.2 4.5 3 5.7V17c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.3c1.8-1.3 3-3.4 3-5.7c0-3.9-3.1-7-7-7M7 21c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-1H7zm12-9V7h2v6h-2m0 4v-2h2v2z" />
							</svg>
							Tips
						</h3>
						<span class="max-w-64 text-2xl font-bold text-amber-700">{chat_gpt_out.tips}</span>
					</div>
				</div>
			{/if}
			{#if chat_gpt_out.praise || chat_gpt_out.mark === question.marks}
				<div
					class="bg-emerald-200 border-emerald-800 border-8 outline-white outline-8 shadow-xl outline text-slate-500 rounded-xl p-5 flex items-center justify-center rotate-3">
					<div class="-rotate-3 flex flex-col items-center justify-center">

						<h3 class="px-4 flex items-center justify-center font-black text-emerald-800">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
								<path fill="currentColor"
											d="M336 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16s16 7.2 16 16m-98.7 7.1l32 48c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-32-48c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4M135 119c9.4-9.4 24.6-9.4 33.9 0l123.8 123.7c10.1 10.1 27.3 2.9 27.3-11.3V192c0-17.7 14.3-32 32-32s32 14.3 32 32v153.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l53 53c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l93 93c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L55 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l117 117c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9zm298.1 365.9c-24.2 14.5-50.9 22.1-77.7 23.1c48.1-39.6 76.6-99 76.6-162.4v-98.1c8.2-.1 16-6.4 16-16V192c0-17.7 14.3-32 32-32s32 14.3 32 32v153.6c0 57.1-30 110-78.9 139.4zm-8.2-466.2c7.4 4.9 9.3 14.8 4.4 22.2l-32 48c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l32-48c4.9-7.4 14.8-9.3 22.2-4.4" />
							</svg>
							Praise
						</h3>
						<span
							class="max-w-64 text-2xl font-bold text-emerald-700">{chat_gpt_out.praise ? chat_gpt_out.praise : "Well done! All correct."}</span>
					</div>
				</div>
			{/if}
			<div
				class="bg-red-200 border-red-700 border-8 p-5 rounded-xl text-red-800 shadow-xl outline-white outline outline-8 mt-10">
				<h2>{chat_gpt_out.mark} out of {question.marks}</h2>
			</div>
		</div>
	{:else}
		<div class="mt-auto h-max">
			<Question {question} bind:answer mark={send_req}  />
		</div>
	{/if}

	<div class="mt-auto -mb-16">
	<h2 class="my-5">Select a question</h2>
		<div class="flex">
			{#each new Array(data.topic_length) as _, question_no}
				<a rel="external" href="/gcse/{$page.params.subject}/{$page.params.topic}/{question_no}" class="card h-48 w-32 flex items-center justify-center text-7xl font-black text-white odd:bg-red-500 even:bg-blue-600 rounded-xl">
					<span>{question_no+1}</span>
				</a>
			{/each}
		</div>
	</div>
</main>


<style>
  .card {
      @apply even:rotate-6 odd:-rotate-6 aspect-square rounded-xl border-white border-8 outline outline-4 outline-gray-900 shadow-md transition-all;
  }

	.card:hover {
      @apply rotate-3 even:-rotate-3 -translate-y-5;
	}

	pre {
			@apply bg-slate-100 w-fit max-w-xl p-2 m-2 rounded-xl overflow-x-scroll;
	}

	textarea {
			@apply resize-none border-8 p-1 border-black rounded-xl;
	}
</style>