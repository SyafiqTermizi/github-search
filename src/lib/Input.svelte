<script lang="ts">
    import { topics, search } from "../store";

    let inputValue: string;

    function handleSubmit(): void {
        topics.update((vals) => {
            if (!vals.includes(inputValue)) {
                return [...vals, inputValue];
            }
            return vals;
        });
        inputValue = "";
    }
</script>

<div class="row">
    <div class="col-sm-12 col-md-10 mt-3">
        <form on:submit|preventDefault={handleSubmit} method="get">
            <input
                type="text"
                class="form-control"
                placeholder="express, svelte, etc..."
                bind:value={inputValue}
            />
        </form>
    </div>
    <div class="col-sm-12 col-md-2 mt-3 d-grid d-md-block">
        <button class="btn btn-outline-primary" on:click={() => search()}>
            Search
        </button>
    </div>
</div>
