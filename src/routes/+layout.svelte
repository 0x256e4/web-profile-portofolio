<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import { page } from '$app/state';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if page.status === 200}
	<header class="container mt-5">
		<nav class="flex justify-between">
			<a href="/" class="hover:underline">Willdhan's Blogs</a>
			<ul class="inline-flex gap-5">
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
		</nav>
	</header>
{/if}

{@render children()}

{#if page.status === 200}
	<hr class="mt-10 mb-2 mx-30 md:mx-99">
	<footer class="flex justify-center mb-2">
		<p>Dibuat dengan senang hati oleh <a href="https://www.linkedin.com/in/muhammad-willdhan-arya-putra/" target="_blank">🐈</a></p>
	</footer>	
{/if}