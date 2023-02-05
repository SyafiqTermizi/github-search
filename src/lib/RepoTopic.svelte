<script lang="ts">
    import Badge from "./Badge.svelte";
    export let topics: string[] = [];
</script>

{#each topics as topic}
    <Badge className={"text-bg-topic me-2"} displayText={topic} />
{/each}
