import { type Writable, writable } from 'svelte/store';

export interface FieldQuestion {
	type: string,
	body: string,
	marks: number,
	fields: string[],
	correct: object
}

export interface OpenQuestion {
	type: string,
	body: string,
	marks: number,
	correct: string,
}

export interface MultichoiceQuestion {
	type: string,
	body: string,
	marks: number,
	correct: number[],
	choices: string[]
}

export interface QuestionSet {
	type: string,
	body: string,
	marks: number,
	questions: QuestionType[]
}

export type QuestionType = FieldQuestion | OpenQuestion | MultichoiceQuestion | QuestionSet;

export const question_store: Writable<QuestionType | null> = writable(null);