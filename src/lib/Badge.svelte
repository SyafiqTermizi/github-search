<script lang="ts">
    export let className: string;
    export let displayText: string;
</script>

<span class="badge rounded-pill {className}">{displayText}</span>

<style>
    .text-bg-topic {
        color: #0d6efd;
        border-style: solid;
        border-width: 1px;
        border-color: #0d6efd;
        background-color: LightCyan;
    }
</style>
