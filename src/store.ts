import { writable } from "svelte/store";

export const topics = writable<string[]>([]);