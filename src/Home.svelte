<script lang="ts">
	import Icon from '@iconify/svelte';
	import Grid from './Grid.svelte';

	export let index: number;

	const stacksIcons = [
		'vscode-icons:file-type-html',
		'vscode-icons:file-type-css',
		'vscode-icons:file-type-js-official',
		'vscode-icons:file-type-svelte',
		'vscode-icons:file-type-vue',
		'vscode-icons:file-type-tailwind',
		'vscode-icons:file-type-scss'
	];
</script>

<div id="Home">
	<Grid {index}>
		<div slot="content" class="flex flex-col gap-5 w-full">
			<span class="text-4xl flex md:w-full font-bold">Front-End Svelte & VueJS Developer ☕</span>
			<span class="max-w-sm flex flex-col gap-2">
				Hi, I'm Emilly Monteiro. a technology enthusiast who loves challenges.
				<ul class="font-medium">
					<li>📌 Campo Grande, MS - Brazil</li>
				</ul>
			</span>
			<div class="flex text-3xl gap-2 text-center w-full">
				<a href="https://www.linkedin.com/in/emilly-monteiro-580254191/" target="_blank">
					<Icon class="hover:text-blue-700" icon="mdi:linkedin" />
				</a>
				<a href="https://github.com/emymonteiro" target="_blank">
					<Icon class="hover:text-blue-700" icon="mdi:github" />
				</a>
			</div>
		</div>
		<div slot="img" class="w-full flex items-center justify-center">
			<img
				src="https://media.discordapp.net/attachments/419592647255261184/1147234740081012837/Emy_1-removebg-preview.png"
				alt=""
			/>
		</div>
		<div slot="footer" class=" flex md:flex-row flex-col text-xl items-center gap-5">
			<div class="font-medium text-center flex flex-col">
				<span>Tech Stack</span>
				<div class="md:hidden w-24 h-[0.1rem] bg-slate-400" />
			</div>
			<div class="font-light hidden md:block">|</div>
			<div class="flex gap-2 text-3xl">
				{#each stacksIcons as stack}
					<button class="w-10 h-10">
						<Icon class="hover:text-4xl transition-all cursor-pointer" icon={stack} />
					</button>
				{/each}
			</div>
		</div>
	</Grid>
</div>
