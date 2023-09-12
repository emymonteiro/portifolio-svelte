<script lang="ts">
	import Grid from './Grid.svelte';

	export let index: number;
</script>

<div id="About">
	<Grid {index}>
		<div slot="img" class="flex">
			<img src="workplace.jpg" class="w-full rounded-xl" alt="" />
		</div>
		<span slot="content" class="flex flex-col gap-3 max-w-sm pl-5">
			<h1 class="text-info uppercase font-bold text-xl">About me</h1>
			<h2 class="font-bold text-2xl text-base-content">
				A Front-end Developer who loves challenges 💻
			</h2>
			<span class="">
				I've been working in development for years, I've always learned everything on my own and
				I've had as many autonomous personal projects as well as startups projects. I adapt very
				well to work environments. I really enjoy learning new things and solving problems.
			</span>
		</span>
	</Grid>
</div>
