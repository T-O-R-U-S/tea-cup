import { type Writable, writable } from 'svelte/store';
import { browser } from "$app/environment"


export const tea_level: Writable<number> = writable((browser ? parseInt(localStorage["tea_level"]) : false) || 0);

export const tea_fill: Writable<number> = writable((browser ? parseInt(localStorage["tea_fill"]) : false) || 0);

export const tea_target: Writable<number> = writable(100 + (browser ? parseInt(localStorage["tea_level"]) : 0) * 10);

let __tea_target = 100 + (browser ? parseInt(localStorage["tea_level"]) : 0) * 10;

tea_target.subscribe(t => {
	__tea_target = t
});

tea_level.subscribe(t => {
	tea_target.set(100 + t*10);

	if(!browser)
		return

	localStorage["tea_level"] = String(t);
});

tea_fill.subscribe(t => {
	if(t >= __tea_target) {
		tea_level.update(l => l + 1)
		tea_fill.set(0)
	}

	if(!browser)
		return

	localStorage["tea_fill"] = String(t);
})