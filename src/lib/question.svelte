<script lang="ts">

	export let question: any;
	export let answer: any;
	
	export let mark: any = null;

	answer = {};

	if(question.type === "multichoice") {
		answer["choices"] = [];
	}
</script>

<div class="flex flex-col items-center text-center">
	<h2 class="lg:w-2/3">{@html question.body}</h2>
	<h4 class="my-5 font-normal">For <span class="font-black">{question.marks}</span> marks</h4>

	{#if question.type === "multichoice"}

		<ol class="grid grid-flow-row grid-cols-2 gap-y-5 text-2xl">
			{#each question.choices as choice, idx}
				<li class="flex items-center even:bg-slate-200 odd:bg-blue-200 p-5 m-2 rounded-xl"><input type="checkbox" name={`choice_${idx}`} id={`choice_${idx}`} bind:group={answer["choices"]} value={question.choices[idx]} class="h-8 aspect-square m-2"> {choice}</li>
			{/each}
			{#if mark}
			<li class="bg-emerald-200 m-2 rounded-xl font-black">
				<button on:click={mark} class="w-full h-full">Mark it</button>
			</li>
			{/if}
		</ol>
	{:else if question.type === "open"}
		<textarea bind:value={answer["text"]} placeholder="Type your answer here..." class="border-8 rounded-xl p-2 border-black" cols="60" rows="10"></textarea>
		{#if mark}<button on:click={mark} class="bg-emerald-200 text-2xl font-black m-2 p-5 rounded-xl">Mark it</button>{/if}
	{:else if question.type === "fields"}
		<ol class="grid grid-cols-2 gap-3 w-max">
			{#each question.fields as field}
				<li><input type="text" name={field} id={field} placeholder={field} bind:value={answer[field]} class="p-5 border-black border-4 rounded-xl"></li>
			{/each}
			{#if mark}
			<li>
				<button on:click={mark} class="bg-emerald-300 h-full w-full p-5 border-black border-4 rounded-xl text-xl font-black">Mark it</button>
			</li>
			{/if}
		</ol>
	{:else if question.type === "set"}
		{#each question.questions as set_question, idx}
			<svelte:self bind:answer={answer[idx]} question={set_question} />
		{/each}
		{#if mark}
			<button on:click={mark} class="bg-emerald-300 h-full m-5 p-5 border-black border-4 rounded-xl text-xl font-black">
				Mark it
			</button>
		{/if}
	{/if}
</div>
