<script lang="ts">

	export let question: any;
	// eslint-disable-next-line svelte/valid-compile
	export let answer: any;
	
	export let mark: any;

	if(question.type === "multichoice") {
		answer = [];
	}
</script>

<div class="flex flex-col items-center justify-center text-center">
	<h2 class="lg:w-1/2 my-5">{@html question.body}</h2>

	{#if question.type === "multichoice"}

		<ol class="grid grid-flow-row grid-cols-2 gap-y-5 text-2xl">
			{#each question.choices as choice, idx}
				<li class="flex items-center even:bg-slate-200 odd:bg-blue-200 p-5 m-2 rounded-xl"><input type="checkbox" name={`choice_${idx}`} id={`choice_${idx}`} bind:group={answer} value={idx} class="h-full aspect-square m-2"> {choice}</li>
			{/each}
			<li class="bg-emerald-200 m-2 rounded-xl font-black">
				<button on:click={mark} class="w-full h-full">Mark it</button>
			</li>
		</ol>
	{:else if question.type === "open"}
		<textarea bind:value={answer} placeholder="Type your answer here..." class="border-8 rounded-xl p-2 border-black" cols="60" rows="10"></textarea>
		<button on:click={mark} class="bg-emerald-200 text-2xl font-black m-2 p-5 rounded-xl">Mark it</button>
	{:else if question.type === "fields"}
		Fields placeholder
	{:else if question.type === "set"}
		{#each question.questions as set_question}
			<svelte:self bind:answer question={set_question} {mark} />
		{/each}
	{/if}
</div>
