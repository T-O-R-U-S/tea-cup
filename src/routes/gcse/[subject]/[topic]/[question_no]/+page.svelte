<script lang="ts">
	import { page } from '$app/stores';
	import Question from '$lib/question.svelte';
	import Teacup from '$lib/teacup.svelte';
	import Summary from '$lib/summary.svelte';
	import { tea_fill, tea_target, tea_level } from '$lib/stores';
	import JSON5 from 'json5';
	import { beforeNavigate, onNavigate } from '$app/navigation';

	export let data;

	interface GptOut {
		error?: string,
		tips?: string,
		mark?: number,
		comments?: string,
		thinking?: string,
		praise?: string
	}

	let chat_gpt_out: GptOut[] = [{
		"error": "VERY VERY VERY LONG DEBUG VERY VERY LONG DEBUG VERY VERY LONG DEBUG VERY VERY LONG DEBUG",
		"tips": "debug",
		"mark": 10,
		"comments": "debug",
		"praise": "Debug"
	}];
	let answer: any = {};

	onNavigate((nav) => {
		refresh(nav.to.url.pathname !== `/gcse/${$page.params.subject}/${$page.params.topic}/${$page.params.question_no}`);
	});


	function refresh(refresh_question: boolean) {
			chat_gpt_out = []
			answer = {}
			
			if(refresh_question) {
				data.questions[0]["type"] = "nil";
			}

			console.log(refresh_question)
	}

	let currently_marking = false;

	async function on_fail(e) {
		currently_marking = false;
		chat_gpt_out = [{
			error: ""
		}];
		answer = {};

		console.error(e);

		return [{
			error: "Whoops",
			debug: e
		}];
	}

	async function send_req() {
		console.log(answer);

		currently_marking = true;

		chat_gpt_out = await fetch($page.url, {
			method: "PUT",
			body: JSON.stringify(answer)
		})
			.then(t => t.json())
			.then(t => JSON5.parse(t.message.content))
			.catch(on_fail);

		console.log(chat_gpt_out);
		
		currently_marking = false;

		fill_tea()
	}

	function fill_tea() {
		if(!chat_gpt_out || !Array.isArray(chat_gpt_out)) {
			return
		}

		for(let output of chat_gpt_out) {
			tea_fill.update(t => t + output.mark * Math.floor(25 / $tea_level))
		}
	}

	console.log($page.url)
</script>

<main class="flex flex-col items-center w-screen h-screen overflow-x-hidden">
	{#if currently_marking}
	<h2 class="my-auto">Please wait while we mark...</h2>
	{:else}
	{#if chat_gpt_out.length !== 0 && Array.isArray(chat_gpt_out)}
		{#each chat_gpt_out as result, idx}
			<Summary chat_gpt_out={result} question={data.questions[0]} {idx} />
		{/each}
	{:else}
		<div class="mt-auto h-max">
			<Question question={data.questions[0]} bind:answer mark={send_req}  />
		</div>
	{/if}
	{/if}

	<div class="mt-auto py-5 h-max w-full px-5 flex flex-col items-center">
	<h2 class="my-5">Select a question</h2>
		<div class="flex">
			{#each new Array(data.topic_length) as _, question_no}
				<a href="/gcse/{$page.params.subject}/{$page.params.topic}/{question_no}" class="card shadow-xl h-48 w-32 flex items-center justify-center text-7xl font-black text-white odd:bg-red-500 even:bg-blue-600 rounded-xl">
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