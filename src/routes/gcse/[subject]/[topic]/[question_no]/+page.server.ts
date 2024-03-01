import questions_database from '$lib/../questions.json'
import { error } from '@sveltejs/kit';

export function load({ params}) {
	let questions: object[] = [];

	let subject = questions_database[params.subject];

	if(!subject) {
		return error(404, 'Subject does not exist.')
	}

	let topic = subject[params.topic];

	if(params.topic === "all" || !topic) {

		for(let topic in subject) {
			questions = questions.concat(subject[topic])
		}

		return { questions }
	}

	questions = [ topic[params.question_no] ];
	let topic_length = topic.length;

	return { questions, topic_length }
}