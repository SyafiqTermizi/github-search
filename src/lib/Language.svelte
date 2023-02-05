<script lang="ts">
    import type { Language } from "../types";
    import Badge from "./Badge.svelte";
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

<Badge className={`text-bg-${colorClass}`} displayText={language} />
