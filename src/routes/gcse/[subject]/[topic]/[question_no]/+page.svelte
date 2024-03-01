<script lang="ts">
	import { page } from '$app/stores';
	import Question from '$lib/question.svelte';

	export let data;

	let question: object = data.questions[0];

	$: question = data.questions[0];

	console.log(question);

	let chat_gpt_out: any | null = null;

	$: chat_gpt_out = null;

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
		<div class="translate-y-96 text-center">
			<h3>{chat_gpt_out.comments ?? ""}</h3>
			<h3>{chat_gpt_out.tips ?? ""}</h3>
			<h3>{chat_gpt_out.praise ?? (chat_gpt_out.mark === question.marks ? "Well done! All correct." : "")}</h3>
			<h2>{chat_gpt_out.mark} out of {question.marks}</h2>
		</div>
	{:else}
		<div class="translate-y-96">
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
      @apply aspect-square rounded-xl border-white border-8 outline outline-4 outline-gray-900 shadow-md transition-all;
  }

	.card:hover {
    	@apply rotate-6 -translate-y-5;
	}

	pre {
			@apply bg-slate-100 w-fit max-w-xl p-2 m-2 rounded-xl overflow-x-scroll;
	}

	textarea {
			@apply resize-none border-8 p-1 border-black rounded-xl;
	}
</style>