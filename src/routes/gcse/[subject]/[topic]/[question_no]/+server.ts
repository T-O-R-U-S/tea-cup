import questions from '$lib/../questions.json';
import { mark_text } from '$lib/index';

export async function PUT({ params, request }) {
	console.log(request);
	let answer = await request.json();
	answer = JSON.stringify(answer, null, 2);
	const question = questions[params.subject][params.topic][params.question_no];

	const completion = await mark_text(question, answer);

	console.log(completion);

	return new Response(completion)
}