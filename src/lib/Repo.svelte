<script lang="ts">
    import { searchResult } from "../store";
    import type { Repo } from "../types";

    let repos: Repo[] = [];
    searchResult.subscribe((sr) => {
        repos = sr.items;
    });
</script>

<div class="row">
    <div class="col-12">
        {#each repos as repo}
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">{repo.full_name}</h5>
                    <p class="card-text">{repo.description}</p>
                </div>
            </div>
        {/each}
    </div>
</div>
