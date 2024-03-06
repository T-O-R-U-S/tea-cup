import { generate_question } from '$lib/index';

export async function GET({ url }) {
	const subject = url.searchParams.get("subject") || null;
	const topic = url.searchParams.get("topic") || null;

	const completion = await generate_question(topic, subject);

	console.log(subject, topic);
	console.log(completion);

	return new Response(completion)
}