// place files you want to import through the `$lib` alias in this folder.

import { CLAUDE_API_KEY } from "$env/static/private";
import Anthropic from "@anthropic-ai/sdk";
import type { MessageParam } from "@anthropic-ai/sdk/src/resources/messages.js";
import type { FullQuestion } from "./question";
import { read } from "$app/server";

import evaluator_dir from './evaluator_prompt.txt';
import generator_dir from './generator_prompt.txt';

import JSON5 from 'json5';

const anthropic = new Anthropic({
    apiKey: CLAUDE_API_KEY
});

export async function call_ai(system_prompt: string, messages: MessageParam[]) {
    return anthropic.messages.create({
        model: "claude-3-sonnet-20240229",
        max_tokens: 1000,
        temperature: 0,
        system: system_prompt,
        messages
    }).then(res => res.content.pop().text)
}

export interface Result {
    relevant_markscheme: string,
    thinking: string,
    mark: number,
    tips: string | "",
    comments: string | "",
    praise: string | ""
}

const EVALUATOR_PROMPT = await read(evaluator_dir).text();
const GENERATOR_PROMPT = await read(generator_dir).text();

// This is a marker type.
export type Stringified<T> = string;

export async function mark_text(question: FullQuestion, answer: object): Promise<Stringified<Result[]>> {
    const response = call_ai(`${EVALUATOR_PROMPT}\nQUESTION:\n${JSON.stringify(question, null, 2)}`, [
        {
            role: "user",
            content: JSON.stringify(answer, null, 2)
        }
    ]);

    return response
}

export async function generate_question(subject: string, topic: string): Promise<Stringified<FullQuestion>> {
    const response = call_ai(GENERATOR_PROMPT, [
            {
                role: "user",
                content: JSON.stringify({ subject, topic }, null, 2)
            }
        ]
    );

    return response
}