import { render, screen, fireEvent } from "@testing-library/svelte";
import { get } from "svelte/store";

import { topics } from "../store";
import Input from "./Input.svelte";

beforeEach(() => {
    topics.set([]);
});


test("Submitting topic form should add topic to topic store", async () => {
    expect(get(topics).length).toBe(0);

    render(Input);

    const textInput = screen.getByPlaceholderText("express, svelte, etc...");
    const topicForm = screen.getByTestId("topic-form");

    await fireEvent.input(textInput, { target: { value: "test" } });
    await fireEvent.submit(topicForm);

    expect(get(topics).length).toBe(1);

    await fireEvent.input(textInput, { target: { value: "test2" } });
    await fireEvent.submit(topicForm);

    expect(get(topics).length).toBe(2);
});

test("Submitting same topic to the topic form should not add topic to topic store", async () => {
    expect(get(topics).length).toBe(0);

    render(Input);

    const textInput = screen.getByPlaceholderText("express, svelte, etc...");
    const topicForm = screen.getByTestId("topic-form");

    await fireEvent.input(textInput, { target: { value: "test" } });
    await fireEvent.submit(topicForm);

    expect(get(topics).length).toBe(1);

    await fireEvent.input(textInput, { target: { value: "test" } });
    await fireEvent.submit(topicForm);

    expect(get(topics).length).toBe(1);
});

