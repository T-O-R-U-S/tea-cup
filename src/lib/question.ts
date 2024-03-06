interface FieldQuestion {
	type: "fields",
	// The body of the question is the main prompt that the student will be given.
	body: string,
	// The title for each field that should be filled out
	fields: string[],
	// Each key is the title of each field
	// Each value is the correct answer to that field.
	correct: Record<string, string>
}

interface OpenQuestion {
	type: "open",
	body: string,
	marks: number,
	correct: string,
}

interface MultichoiceQuestion {
	type: "multichoice",
	body: string,
	marks: number,
	// The correct choices
	correct: string[],
	// All the available choices, including the correct ones
	choices: string[]
}

interface QuestionSet {
	type: "set",
	body: string,
	marks: number,
	questions: FullQuestion[]
}

export type FullQuestion = QuestionSet | MultichoiceQuestion | OpenQuestion | FieldQuestion;