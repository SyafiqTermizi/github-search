import { screen, render } from "@testing-library/svelte";

import Language from "./Language.svelte";

test.each([
    ["JavaScript", "text-bg-primary"],
    ["Python", "text-bg-secondary"],
    ["Vue", "text-bg-success"],
    ["Svelte", "text-bg-info"],
    ["HTML", "text-bg-warning"],
    ["CSS", "text-bg-danger"],
    ["Dockerfile", "text-bg-light"],
    ["TypeScript", "text-bg-dark"],
    ["Jupyter Notebook", "text-bg-primary"],
    ["Swift", "text-bg-secondary"],
    ["Shell", "text-bg-success"],
    ["PHP", "text-bg-info"],
    ["Go", "text-bg-warning"],
    ["Ruby", "text-bg-danger"],
    ["C", "text-bg-light"],
])("stuff", (language, expectedClass) => {
    render(Language, { props: { language: language } });

    const elem = screen.getByText(language);
    expect(elem.className.includes(expectedClass)).toBeTruthy();
})