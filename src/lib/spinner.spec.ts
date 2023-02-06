import { render, screen } from '@testing-library/svelte';

import { loading } from '../store';
import Spinner from './Spinner.svelte';

test("Spinner should not be rendered when loading is false", () => {
    loading.set(false);
    render(Spinner);

    expect(screen.queryByTestId("spinner")).toBeNull();
});

test("Spinner should be rendered when loading is true", () => {
    loading.set(true);
    render(Spinner);

    expect(screen.queryByTestId("spinner")).toBeTruthy();
});