<script lang="ts">
    import { page } from "$app/state";
</script>


<main class="container">
    <h1 class="text-3xl">Error</h1>
    <p class="font-semibold">Code error: { page.status }</p>
    <p class="font-semibold">Deskripsi error: { page.error?.message ?? "Error tidak diketahui! ^^" }</p>
</main>