<script lang="ts">
    import contoh from 'gambar_static/example.jpg';
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
            <a href="/project/{ project.id }">
                <h1 class="text-xl mb-2 font-bold">{ project.judul }</h1>
                <picture>
                    <source srcset="{ contoh }" type="image/jpeg">
                    <img src="{ contoh }" alt="" class="w-100 h-30 object-cover mb-2">
                </picture>
                <p id="deskripsi" class="mb-5 text-justify cursor-text">{ truncate(project.deskripsi ?? "") }</p>
                <p id="tech-stack" class="cursor-text"><span class="font-bold">Tech Stack:</span> { project.tech_stack }</p>
            </a>
        </div>
        {/each}
    </div>
</main>