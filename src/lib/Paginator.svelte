<script lang="ts">
    import {
        pageInfo,
        search,
        currentPage as currentPageStore,
    } from "../store";
    let pages: number[];
    let maxPage: number = 0;
    let currentPage: number = 0;

    pageInfo.subscribe((values) => {
        [maxPage, currentPage] = values;

        const localPages: number[] = [];

        for (let i = -2; i <= 2; i++) {
            if (currentPage + i > 0 && currentPage + i <= maxPage) {
                localPages.push(currentPage + i);
            }
        }
        console.log(currentPage, localPages, maxPage);
        pages = [...localPages];
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
