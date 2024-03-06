export async function PUT({ request }) {
	const data = await request.json();
	const answer = data.answer;
	const question = data.question;

	const completion = await mark_text(question, answer);

	console.log(answer);
	console.log(completion);

	return new Response(completion)
}