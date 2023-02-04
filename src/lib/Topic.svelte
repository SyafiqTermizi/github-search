<script lang="ts">
    import { topics } from "../store";

    function removeTopic(topicToRemove: string) {
        topics.update((values) =>
            values.filter((topic: string) => topic !== topicToRemove)
        );
    }
</script>

<div class="row">
    <div class="mt-3">
        {#each $topics as topic}
            <p class="btn badge bg-secondary btn-sm me-2">
                {topic}
                <button class="btn badge" on:click={() => removeTopic(topic)}>
                    x
                </button>
            </p>
        {/each}
    </div>
</div>

<style>
    p.btn:hover {
        color: white;
    }
    p.btn > button.btn:hover {
        color: black;
    }
</style>
