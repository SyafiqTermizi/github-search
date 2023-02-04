<script lang="ts">
    export let topics: string[] = [];
</script>

{#each topics as topic}
    <span class="badge rounded-pill text-bg-topic me-2">{topic}</span>
{/each}

<style>
    .text-bg-topic {
        color: LightCyan;
        border-color: LightCyan;
        background-color: #0d6efd;
    }
</style>
