import prompt_dir from '$lib/generator_prompt.txt';
import fs from 'fs';
import OpenAI from 'openai';
import { OPEN_AI_API_KEY } from '$env/static/private';

const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });
const prompt = fs.readFileSync('./' + prompt_dir);

export async function GET({ url, request }) {
	const subject = url.searchParams.get("subject") || null;
	const topic = url.searchParams.get("topic") || null;

	const completion = await openai.chat.completions.create({
		messages: [
			{
				role: "system",
				name: "Teacup",
				content: String(prompt)
			},
			{
				role: "user",
				content: JSON.stringify({
					subject,
					topic
				}, null, 2)
			}
		],
		model: "gpt-3.5-turbo",
	});

	console.log(subject, topic);
	console.log(completion.choices);

	return new Response(JSON.stringify(completion.choices[0].message.content))
}