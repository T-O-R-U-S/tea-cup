<script lang="ts">
	import { page } from '$app/stores';
	import Question from '$lib/question.svelte';
	import Teacup from '$lib/teacup.svelte';
	import Summary from '$lib/summary.svelte';
	import { tea_fill, tea_target, tea_level } from '$lib/stores';

	export let data;

	let question: object = data.questions[0];

	$: question = data.questions[0];

	console.log(question);

	let chat_gpt_out: any | null = null;

	$: chat_gpt_out = null;

	let debug: boolean = true;

	let answer: any;

	let height: number = 75;

	let currently_marking = false;

	async function send_req() {
		console.log(answer);

		currently_marking = true;

		chat_gpt_out = await fetch($page.url, {
			method: "PUT",
			body: JSON.stringify(answer)
		})
			.then(t => t.json())
			.then(t => JSON.parse(t.message.content));

		fill_tea()
	}

	function fill_tea() {
		for(let output of chat_gpt_out) {
			tea_fill.update(t => t + output.mark * Math.floor(25 / $tea_level))
		}
	}
</script>

<main class="flex flex-col items-center w-screen h-screen overflow-x-hidden">
	{#if chat_gpt_out}
		{#each chat_gpt_out as result, idx}
			<Summary chat_gpt_out={result} {question} {idx} />
		{/each}
	{:else}
		<div class="mt-auto h-max">
			<Question {question} bind:answer mark={send_req}  />
		</div>
	{/if}

	<div class="mt-auto py-5 h-max w-full px-5 flex flex-col items-center">
	<h2 class="my-5">Select a question</h2>
		<div class="flex">
			{#each new Array(data.topic_length) as _, question_no}
				<a rel="external" href="/gcse/{$page.params.subject}/{$page.params.topic}/{question_no}" class="card shadow-xl h-48 w-32 flex items-center justify-center text-7xl font-black text-white odd:bg-red-500 even:bg-blue-600 rounded-xl">
					<span>{question_no+1}</span>
				</a>
			{/each}
		</div>
	</div>

<!--	<a href="/">-->
<!--		<div-->
<!--			class="border-black border-8 aspect-square h-48 fixed left-5 bottom-5 rounded-full overflow-clip bg-clip-border flex flex-col items-center justify-center bg-white shadow-xl">-->
<!--			<h4>Your teacup</h4>-->
<!--			<div-->
<!--				class="h-1/2 w-1/2 border-8 border-t-0 rounded-t-none border-black rounded-b-full justify-end items-center flex flex-col overflow-clip">-->
<!--				<div class="h-1/2 rounded-b-full bg-green-200 w-full border-4 border-white" id="tea" style:height="{height}%">-->

<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
<!--	</a>-->
	<Teacup />
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