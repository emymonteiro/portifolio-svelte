<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<section
	id="Home"
	class="h-[calc(100vh+5rem)] md:h-[calc(100vh-5rem)] bg-base-200 flex items-center justify-center"
>
	<div class="flex flex-col w-full items-center md:max-w-4xl max-w-lg">
		<div class="flex md:flex-row flex-col-reverse items-center w-full overflow-hidden">
			<div class="flex flex-col gap-5 w-full md:w-[50%] ml-8">
				<span class="text-4xl flex md:w-full font-bold">Front-End Svelte & VueJS Developer ☕</span>
				<span class="max-w-sm">
					Hi, I'm Emilly Monteiro. a technology enthusiast who loves challenges.
					<ul>
						<li>📌 Campo Grande, MS - Brazil</li>
					</ul>
				</span>
				<div class="flex text-3xl gap-2 text-center w-full">
					<button>
						<Icon class="hover:text-blue-700" icon="mdi:linkedin" />
					</button>
					<button>
						<Icon class="hover:text-blue-700" icon="mdi:github" />
					</button>
				</div>
			</div>
			<div class="md:w-96 w-full pb-8 md:pb-0 md:h-96 ml-auto flex items-center justify-center">
				<img
					src="https://media.discordapp.net/attachments/419592647255261184/1147234740081012837/Emy_1-removebg-preview.png"
					alt=""
				/>
			</div>
		</div>
		<div
			class="mt-32 md:mt-0 flex w-full md:flex-row flex-col text-xl md:max-w-4xl md:pl-8 pl-0 ml-8 md:ml-0 items-center gap-5"
		>
			<div class="font-medium text-center flex flex-col">
				<span>Tech Stack</span>
				<div class="md:hidden w-24 h-[0.1rem] bg-slate-400" />
			</div>
			<div class="font-light hidden md:block">|</div>
			<div class="flex gap-2 text-3xl">
				<button class="w-10 h-10">
					<Icon
						class="hover:text-4xl transition-all cursor-pointer"
						icon="vscode-icons:file-type-html"
					/>
				</button>
				<button class="w-10 h-10">
					<Icon
						class="hover:text-4xl transition-all cursor-pointer"
						icon="vscode-icons:file-type-css"
					/>
				</button>
				<button class="w-10 h-10">
					<Icon
						class="hover:text-4xl transition-all cursor-pointer"
						icon="vscode-icons:file-type-js-official"
					/>
				</button>
				<button class="w-10 h-10">
					<Icon
						class="hover:text-4xl transition-all cursor-pointer"
						icon="vscode-icons:file-type-svelte"
					/>
				</button>
				<button class="w-10 h-10">
					<Icon
						class="hover:text-4xl transition-all cursor-pointer"
						icon="vscode-icons:file-type-vue"
					/>
				</button>
				<button class="w-10 h-10">
					<Icon
						class="hover:text-4xl transition-all cursor-pointer"
						icon="vscode-icons:file-type-tailwind"
					/>
				</button>
				<button class="w-10 h-10">
					<Icon
						class="hover:text-4xl transition-all cursor-pointer"
						icon="vscode-icons:file-type-scss"
					/>
				</button>
			</div>
		</div>
	</div>
</section>
