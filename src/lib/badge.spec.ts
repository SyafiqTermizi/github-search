import { render, screen } from '@testing-library/svelte';

import Badge from "./Badge.svelte";

test("Badge should render correctly with props", () => {
    render(Badge, { props: { className: "testingbadgecomponent-class", displayText: "testingbadgecomponent" } });
    const badgeElem = screen.getByText("testingbadgecomponent");

    expect(badgeElem).toBeTruthy();
    expect(badgeElem.className.includes("testingbadgecomponent-class")).toBeTruthy();
});