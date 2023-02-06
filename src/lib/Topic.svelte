<script lang="ts">
    import { topics } from "../store";

    function removeTopic(topicToRemove: string) {
        topics.update((values) =>
            values.filter((topic: string) => topic !== topicToRemove)
        );
    }
</script>

{#if $topics.length}
    <div class="row">
        <div class="mt-3">
            {#each $topics as topic}
                <p class="btn badge bg-secondary btn-sm me-2">
                    {topic}
                    <button
                        class="btn badge"
                        on:click={() => removeTopic(topic)}
                    >
                        x
                    </button>
                </p>
            {/each}
            <button
                class="btn badge bg-danger btn-sm me-2 py-2"
                on:click={() => topics.set([])}
            >
                clear
            </button>
        </div>
    </div>
{/if}

<style>
    p.btn:hover {
        color: white;
    }
    p.btn > button.btn:hover {
        color: black;
    }
</style>
