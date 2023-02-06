<script lang="ts">
    import { searchResult } from "../store";
    import type { Repo } from "../types";

    import Star from "./icons/Star.svelte";
    import Badge from "./Language.svelte";
    import RepoTopic from "./RepoTopic.svelte";

    let repos: Repo[] = [];
    let repoCount: number = 0;

    searchResult.subscribe((value) => {
        if (value) {
            repos = value.items;
            repoCount = value.total_count;
        }
    });
</script>

{#if repos.length}
    <div class="row">
        <p>
            <b>
                {repoCount} repository results
            </b>
        </p>
    </div>
    <div class="row">
        <div class="col-12">
            {#each repos as repo}
                <hr />
                <h5>
                    <a target="_blank" rel="noreferrer" href={repo.html_url}>
                        {repo.full_name}
                    </a>
                </h5>
                <p>{repo.description}</p>

                {#if repo.topics.length}
                    <p>
                        <RepoTopic topics={repo.topics} />
                    </p>
                {/if}

                <p class="text-muted">
                    <small>
                        <span>
                            <Star color="#6c757d" />
                            {repo.stargazers_count}
                        </span>&nbsp;

                        {#if repo.language}
                            <Badge language={repo.language} />&nbsp;
                        {/if}

                        {#if repo.license}
                            <span>{repo.license.name}</span>&nbsp;
                        {/if}

                        <span>{repo.updated_at}</span>&nbsp;</small
                    >
                </p>
            {/each}
        </div>
    </div>
{/if}

<style>
    a {
        text-decoration: none;
    }
</style>
