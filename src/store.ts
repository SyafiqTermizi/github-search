import { writable, get, derived } from "svelte/store";
import type { SearchResult } from "./types";

export const topics = writable<string[]>([]);
export const currentPage = writable<number>(1);
export const searchResult = writable<SearchResult>({
    "total_count": 0,
    "incomplete_results": false,
    "items": []
}
);

export function search() {
    const baseURL = "https://api.github.com/search/repositories?q="
    const searchTopics = get(topics);
    const queryString = searchTopics.map(topic => `topic:${topic}`).join("+");

    if (searchTopics.length) {
        fetch(`${baseURL}${queryString}&page=${get(currentPage)}`)
            .then(response => response.json())
            .then(data => {
                searchResult.set(data);
            });
    }
}

export const pageInfo = derived(
    [searchResult, currentPage],
    ([$searchResult, $currentPage]) => {
        const maxPage = $searchResult.total_count > 100
            ? Math.ceil(100 / 3)
            : Math.ceil($searchResult.total_count / 30);
        return [maxPage, $currentPage]
    })