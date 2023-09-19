<script lang="ts">
	import Icon from '@iconify/svelte';
	import { getEven } from './utils/helper';

	export let index: number;
	export let Item: {
		img: string;
		title: string;
		description: string;
		tags: string[];
		github: string;
		demo: string;
	};
</script>

<div
	class={`bg-base-100 rounded-xl w-3xl shadow flex ${
		getEven(index) ? 'md:flex-row' : 'md:flex-row-reverse'
	} flex-col items-stretch md:max-h-96`}
>
	<div class="md:w-[60%] w-full p-5">
		<div
			class="h-96 max-h-full rounded-xl w-full md:h-full flex items-center bg-cover bg-center"
			style={`background-image: url("${Item.img}");`}
		/>
	</div>
	<div class="py-10 px-5 h-full md:w-[40%] flex flex-col gap-5 items-center">
		<h1 class="font-bold text-xl">{Item.title}</h1>
		<span class="description text-gray-500 text-lg">
			{Item.description}
		</span>
		<div class="flex gap-3">
			{#each Item.tags as item}
				<div
					class="shadow py-1 px-3 rounded-md border flex items-center justify-center font-semibold"
				>
					<span>{item}</span>
				</div>
			{/each}
		</div>
		<div class="flex gap-8">
			<a
				href={Item.github}
				target="_blank"
				class="hover:text-info font-medium text-lg flex gap-1 items-center"
			>
				<span>Code</span>
				<Icon class="" icon="ri:github-line" />
			</a>
			<a
				href={Item.demo}
				target="_blank"
				class="hover:text-info font-medium text-lg flex gap-1 items-center"
			>
				<span>Live Demo</span>
				<Icon class="" icon="akar-icons:link-out" />
			</a>
		</div>
	</div>
</div>
