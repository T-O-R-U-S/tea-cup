import { OPEN_AI_API_KEY } from '$env/static/private';
import OpenAI from 'openai';

import questions from '$lib/../questions.json';
import prompt_dir from '$lib/prompt.txt';
import * as fs from 'fs';

const prompt = fs.readFileSync('./' + prompt_dir);
const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });

export async function PUT({ params, request }) {
	let answer = await request.json();
	answer = JSON.stringify(answer, null, 2);
	const question = JSON.stringify(questions[params.subject][params.topic][params.question_no], null, 2);

	console.log(question);

	const completion = await openai.chat.completions.create({
		messages: [
			{
				role: "system",
				name: "Teacup",
				content: `${prompt}\n\nQUESTION AND MARK SCHEME:\n${question}`
			},
			{
				role: "user",
				content: answer
			}
		],
		model: "gpt-3.5-turbo",

	});

	console.log(answer);
	console.log(completion.choices);

	return new Response(JSON.stringify(completion.choices[0]))
}