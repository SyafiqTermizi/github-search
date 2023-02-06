<script lang="ts">
    import { loading } from "../store";
</script>

{#if $loading}
    <div class="row mt-5 " data-testid="spinner">
        <div class="col-12 text-center">
            <div
                class="spinner-border"
                style="width: 3rem; height: 3rem;"
                role="status"
            />
        </div>
    </div>
{/if}
