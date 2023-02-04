import { writable, get } from "svelte/store";
import type { SearchResult } from "./types";

export const topics = writable<string[]>([]);
export const searchResult = writable<SearchResult>();

export function search() {
    const baseURL = "https://api.github.com/search/repositories?q="
    const searchTopics = get(topics);
    const queryString = searchTopics.map(topic => `topic:${topic}`).join("+");

    fetch(`${baseURL}${queryString}`)
        .then(response => response.json())
        .then(data => searchResult.set(data));
}
