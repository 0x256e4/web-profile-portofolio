<script lang="ts">
    import contoh from 'gambar_static/example.jpg';
    import restful_api_project from "gambar_static/1.png";
    import frontend_react_project from "gambar_static/2.png";
	import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const truncate = (text: string, maxLength: number = 120): string => {
        return (text.length >= maxLength ? text.slice(0, maxLength) + '...' : text)
    }
</script>

<main class="container">
    <h1 class="my-5 text-3xl font-bold">Projects</h1>
    <div id="projects" class="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-10">
        {#each data.projects as project}
        <div id="project" class="border-4 box-content w-50 p-4 hover:border-amber-400 hover:-translate-y-2 cursor-pointer">
            <a href="/projects/{ project.id }">
                <div id="title" class="h-15 flex justify-center items-center">
                    <h1 class="text-xl font-bold text-center">{ project.judul }</h1>
                </div>
                <!-- Sementara dulu, belum bikin dashboard dan penyimpanan resource :p -->
                {#if project.id === 1}
                <picture>
                    <source srcset="{ restful_api_project }" type="image/jpeg">
                    <img src="{ restful_api_project }" alt="" class="w-100 h-30 object-cover mb-2">
                </picture>
                {:else if project.id === 2}
                    <picture>
                        <source srcset="{ frontend_react_project }" type="image/jpeg">
                        <img src="{ frontend_react_project }" alt="" class="w-100 h-30 object-cover mb-2">
                    </picture>
                {:else}
                    <picture>
                        <source srcset="{ contoh }" type="image/jpeg">
                        <img src="{ contoh }" alt="" class="w-100 h-30 object-cover mb-2">
                    </picture>
                {/if}
                <p id="deskripsi" class="mb-5 text-justify h-30">{ truncate(project.deskripsi ?? "") }</p>
                <p id="tech-stack" class="cursor-text"><span class="font-bold">Tech Stack:</span> { project.tech_stack }</p>
            </a>
        </div>
        {/each}
    </div>
</main>