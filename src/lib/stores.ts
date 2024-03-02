import { type Writable, writable } from 'svelte/store';

export const tea_level: Writable<number> = writable(1);

export const tea_fill: Writable<number> = writable(0);

export const tea_target: Writable<number> = writable(100);

let __tea_target = 100;

tea_target.subscribe(t => __tea_target = t);

tea_level.subscribe(t => {
	tea_target.set(100 + t*10)
});

tea_fill.subscribe(t => {
	if(t >= __tea_target) {
		tea_level.update(l => l + 1)
		tea_fill.set(0)
	}
})