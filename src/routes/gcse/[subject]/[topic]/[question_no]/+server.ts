import { OPEN_AI_API_KEY } from '$env/static/private';
import OpenAI from 'openai';

import questions from '$lib/../questions.json';
import prompt_dir from '$lib/prompt.txt';
import * as fs from 'fs';

const prompt = fs.readFileSync('./' + prompt_dir);
const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });

export async function PUT({ url, params, request }) {
	let answer = await request.text();

	const completion = await openai.chat.completions.create({
		messages: [
			{
				role: "system",
				name: "Teacup",
				content: `${prompt}\n${JSON.stringify(questions[params.subject][params.topic][params.question])}`
			},
			{
				role: "user",
				content: answer
			}
		],
		model: "gpt-3.5-turbo",

	});

	console.log(answer);
	console.log(completion.choices[0])

	return new Response(JSON.stringify(completion.choices[0]))
}