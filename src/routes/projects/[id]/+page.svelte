<script lang="ts">
    import contoh from "gambar_static/example.jpg";
    import restful_api_project from "gambar_static/1.png";
    import frontend_react_project from "gambar_static/2.png";
	import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<main class="container">
    <h1 class="my-5 text-3xl font-bold">Projects</h1>
    <div id="project-detail" class="flex flex-col-reverse 2xl:flex-row gap-5">
        <div>
            <h2 class="text-2xl font-bold">{ data.project.judul }</h2>
            <p>Tech Stack: <span class="font-semibold">{ data.project.tech_stack }</span> - (<a href="{ data.project.link_repo }" target="_blank">{ data.project.link_repo }</a>)</p>
            <p class="lg:w-200 text-justify mt-3">{ data.project.deskripsi }</p>
        </div>
        <div class="flex items-center mx-auto">
            <!-- Untuk sementara :p -->
            {#if data.project.id === 1}
                <picture>
                    <source srcset="{ restful_api_project }" type="image/png">
                    <img src="{ restful_api_project }" alt="Project" class="w-200 xl:w-fit 2xl:my-32">
                </picture>
            {:else if data.project.id === 2}
                <picture>
                    <source srcset="{ frontend_react_project }" type="image/png">
                    <img src="{ frontend_react_project }" alt="Project" class="w-200 xl:w-fit 2xl:my-32">
                </picture>
            {:else}
                <picture>
                    <source srcset="{ contoh }" type="image/jpeg">
                    <img src="{ contoh }" alt="Project" class="w-100">
                </picture>
            {/if}
        </div>
    </div>
</main>