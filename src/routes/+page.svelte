<script lang="ts">
    // INSPIRASI : https://stanislas.blog/
    import pfp_url from 'gambar_static/will.jpg';
    import { Github, Linkedin, Instagram } from 'lucide-svelte';
</script>

<main>
    <section id="profile" class="container mt-5 flex flex-col justify-center items-center">
        <picture class="mb-2">
            <source srcset="{ pfp_url }" type="image/jpeg" sizes="100vw">
            <img src="{ pfp_url }" alt="Profile" loading="lazy" class="h-auto w-32 rounded-full">
        </picture>
        <h1 class="text-4xl text-center font-extrabold">Muhammad Willdhan Arya Putra</h1>
        <h2 class="text-xl text-center text-neutral-500 dark:text-neutral-400">Terima kasih sudah mampir ^^</h2>
        <div id="social-media" class="mt-3 flex gap-2">
            <a href="https://github.com/0x256e4" target="_blank" class="text-neutral-600 hover:text-black transition-colors">
                <Github class="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-willdhan-arya-putra/" target="_blank" class="text-neutral-600 hover:text-black transition-colors">
                <Linkedin class="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/_willdhan.dev/" target="_blank" class="text-neutral-600 hover:text-black transition-colors">
                <Instagram class="w-5 h-5" />
            </a>
        </div>
        <div id="brief-profile" class="my-3 flex text-justify md:px-40 sm:px-20 px-10">
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni atque inventore, natus quaerat suscipit minus reiciendis. Omnis quo illum quaerat labore a nam veritatis molestias ipsa, quos quidem animi ex est.</p>
        </div>
    </section>
	<hr class="mb-2 mx-30 md:mx-99">
    <section id="posts" class="container">
        <h1 class="my-2 text-2xl font-extrabold">Postingan terpilih</h1>
        <div id="post" class="mb-2">
            <p class="text-xl font-bold hover:underline cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p class="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci natus hic porro facere. Optio, quibus ...</p>
            <div id="utils" class="flex gap-2">
                <span>13 Maret 1337</span>
                <span class="text-red-500 font-bold">.</span>
                <span>1337 Kalimat</span>
                <span class="text-red-500 font-bold">.</span>
                <span>17 Menit</span>
            </div>
        </div>
        <div id="post" class="mb-2">
            <p class="text-xl font-bold hover:underline cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p class="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci natus hic porro facere. Optio, quibus ...</p>
            <div id="utils" class="flex gap-2">
                <span>13 Maret 1337</span>
                <span class="text-red-500 font-bold">.</span>
                <span>1337 Kalimat</span>
                <span class="text-red-500 font-bold">.</span>
                <span>17 Menit</span>
            </div>
        </div>
        <div id="post" class="mb-2">
            <p class="text-xl font-bold hover:underline cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p class="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci natus hic porro facere. Optio, quibus ...</p>
            <div id="utils" class="flex gap-2">
                <span>13 Maret 1337</span>
                <span class="text-red-500 font-bold">.</span>
                <span>1337 Kalimat</span>
                <span class="text-red-500 font-bold">.</span>
                <span>17 Menit</span>
            </div>
        </div>
    </section>
</main>