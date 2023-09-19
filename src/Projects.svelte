<script lang="ts">
	import Card from './Card.svelte';
	/* import type { Item } from './Card.svelte'; */
	import { getEven } from './utils/helper';

	export let index: number;
	const projects = [
		{
			title: 'Clothes Store 🧥',
			img: 'clothes.jpg',
			description:
				'A clothe store website is an online platform which helps people to buy clothes at home. The website provides a store bag that allow users to manage their items before buying.',
			tags: ['Svelte', 'Tailwind'],
			github: 'https://github.com/emymonteiro/clothes-store',
			demo: 'https://emymonteiro.github.io/clothes-store/'
		},
		{
			title: 'Url Shortner 🔗',
			img: 'shortner.jpeg',
			description:
				'A webpage that allows you to short some links, with sign in and sign up system and gives you the power to organize and favorite your preffered links.',
			tags: ['VueJS', 'Windicss', 'Firebase'],
			github: 'https://github.com/emymonteiro/url-shorter',
			demo: 'https://eshortener.netlify.app'
		},
		{
			title: 'Twitter Clone 🐦',
			img: 'twitter.png',
			description:
				"A clone of Twitter made with VueJS and Tailwind, I've also have a similar version that I've made using React, but my skills with React are inferior in comparision with VueJS or Svelte.",
			tags: ['VueJS', 'Tailwind'],
			github: 'https://github.com/emymonteiro/vite-js-twitter',
			demo: 'https://emymonteiro.github.io/vite-js-twitter/'
		}
	];
</script>

<div
	id="Projects"
	class={`flex w-full items-center flex-col ${
		!getEven(index) ? 'bg-base-100' : 'bg-base-200'
	} md:p-20 p-5`}
>
	<div class="flex flex-col w-full md:max-w-4xl">
		<h1 class="text-info uppercase font-bold text-xl">Projects</h1>
		<h2 class="font-bold text-2xl text-base-content">
			Each project is a unique piece of development 🧩
		</h2>
		<div class="mt-10 flex flex-col gap-10 w-full">
			{#each projects as project, i}
				<Card Item={project} index={i} />
			{/each}
		</div>
	</div>
</div>
