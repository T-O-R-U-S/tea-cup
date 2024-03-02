import { OPEN_AI_API_KEY } from '$env/static/private';
import OpenAI from 'openai';

import questions from '$lib/../questions.json';
import prompt_dir from '$lib/evaluator_prompt.txt';
import * as fs from 'fs';

const prompt = fs.readFileSync('./' + prompt_dir);
const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });

export async function PUT({ request }) {
	let data = await request.json();
	const answer = data.answer;
	const question = data.question;

	console.log(String(prompt));
	console.log(answer);
	console.log(question);

	const completion = await openai.chat.completions.create({
		messages: [
			{
				role: "system",
				name: "Teacup",
				content: `${String(prompt)}\n\nQUESTION AND MARK SCHEME:\n${question}`
			},
			{
				role: "user",
				content: JSON.stringify(answer)
			}
		],
		model: "gpt-3.5-turbo",

	});

	console.log(answer);
	console.log(completion.choices);

	return new Response(JSON.stringify(completion.choices[0]))
}