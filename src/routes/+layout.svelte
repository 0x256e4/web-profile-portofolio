<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import { page } from '$app/state';
	import { Menu, X } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	let { children } = $props();

	let isNavOpen = $state(false);

	const toggleNavBurger = () => {
		isNavOpen = !isNavOpen;
	}

	const closeNavMobile = () => {
		isNavOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if page.status === 200}
	<header class="container mt-5">
		<nav class="flex justify-between items-center">
			<a href="/" class="hover:underline">Willdhan's Blogs</a>
			<ul class="hidden md:inline-flex gap-5">
				<li>
					<a href="/posts" class="hover:underline">Posts</a>
				</li>
				<li>
					<a href="/projects" class="hover:underline">Projects</a>
				</li>
				<li>
					<a href="/about" class="hover:underline">About Me</a>
				</li>
			</ul>

			<button class="md:hidden p-2 text-neutral-700 hover:text-black focus:outline-none" onclick={toggleNavBurger} aria-label="Toggle Menu">
				{#if isNavOpen}
					<X class="w-6 h-6" />
				{:else}
					<Menu class="w-6 h-6" />
				{/if}
			</button>
		</nav>
		{#if isNavOpen}
			<div transition:slide={{ duration: 300}} class="md:hidden mt-4 border-t border-gray-200 pt-4">
				<ul class="flex flex-col gap-4">
					<li>
						<a href="/posts" class="block hover:text-blue-600 font-medium">
							Posts
						</a>
					</li>
					<li>
						<a href="/projects" class="block hover:text-blue-600 font-medium">
							Projects
						</a>
					</li>
					<li>
						<a href="/about" class="block hover:text-blue-600 font-medium">
							About Me
						</a>
					</li>
				</ul>
			</div>
		{/if}
	</header>
{/if}

{@render children()}

{#if page.status === 200}
	<hr class="mt-10 mb-2 mx-30 md:mx-99">
	<footer class="flex justify-center mb-2">
		<p>Dibuat dengan senang hati oleh <a href="https://www.linkedin.com/in/muhammad-willdhan-arya-putra/" target="_blank">🐈</a></p>
	</footer>	
{/if}