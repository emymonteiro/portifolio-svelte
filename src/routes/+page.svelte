<script lang="ts">
	import About from '../About.svelte';
	import Contact from '../Contact.svelte';
	import Footer from '../Footer.svelte';
	import Home from '../Home.svelte';
	import Projects from '../Projects.svelte';

	const pages = [Home, About, Projects, Contact];
</script>

<div class="overflow-auto scrollbar-hide md:scrollbar-default">
	{#each pages as page, i}
		<svelte:component this={page} index={i} />
	{/each}

	<Footer />
</div>
