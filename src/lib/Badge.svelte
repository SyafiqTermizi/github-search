<script lang="ts">
    import type { Language } from "../types";

    export let language: Language;

    const languageMapping = {
        JavaScript: "primary",
        Python: "secondary",
        Vue: "success",
        Svelte: "info",
        HTML: "warning",
        CSS: "danger",
        Dockerfile: "light",
        TypeScript: "dark",
        "Jupyter Notebook": "primary",
        Swift: "secondary",
        Shell: "success",
        PHP: "info",
        Go: "warning",
        Ruby: "danger",
        C: "light",
    };

    const colorClass = languageMapping[language]
        ? languageMapping[language]
        : "primary";
</script>

<span class={`badge rounded-pill text-bg-${colorClass}`}>{language}</span>
