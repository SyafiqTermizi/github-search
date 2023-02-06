<script lang="ts">
    import {
        pageInfo,
        search,
        currentPage as currentPageStore,
    } from "../store";

    let currentPage: number = 0;
    let maxPage: number = 0;
    let pages: number[];

    pageInfo.subscribe((values) => {
        currentPage = values.currentPage;
        maxPage = values.maxPage;
        pages = values.pages;
    });
</script>

{#if maxPage > 1}
    <div class="row">
        <div class="col-12 text-center">
            <nav>
                <ul class="pagination">
                    <li class="page-item">
                        <button
                            class="page-link"
                            class:disabled={currentPage === 1}
                            on:click={() => {
                                currentPageStore.set(1);
                                search();
                            }}
                        >
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    {#each pages as page}
                        <li class="page-item">
                            <button
                                class="page-link"
                                class:active={page === currentPage}
                                on:click={() => {
                                    currentPageStore.set(page);
                                    search();
                                }}
                            >
                                {page}
                            </button>
                        </li>
                    {/each}
                    <li class="page-item">
                        <button
                            class="page-link"
                            class:disabled={currentPage === maxPage}
                            on:click={() => {
                                currentPageStore.set(maxPage);
                                search();
                            }}
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
{/if}
