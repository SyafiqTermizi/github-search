import { render, screen } from '@testing-library/svelte';

import RepoTopic from './RepoTopic.svelte';

test("RepoTopic should render all topics passed as Badge", () => {
    const topics = Array(5).fill("topic");
    render(RepoTopic, { props: { topics: topics } });
    const elems = screen.getAllByText("topic");

    expect(elems.length).toBe(5);
});