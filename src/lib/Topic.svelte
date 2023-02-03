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
            <button
                class="btn badge bg-secondary btn-sm me-2"
                on:click={() => removeTopic(topic)}
            >
                {topic}
            </button>
        {/each}
    </div>
</div>
