<script lang="ts">
	import Icon from '@iconify/svelte';
	import { getEven } from './utils/helper';

	export let index: number;
</script>

<div
	id="Contact"
	class={`flex w-full items-center flex-col ${
		!getEven(index) ? 'bg-base-100' : 'bg-base-200'
	} p-20`}
>
	<div class="flex flex-col w-full md:max-w-4xl max-w-lg">
		<h1 class="text-info uppercase font-bold text-xl">Contact</h1>
		<h2 class="font-bold text-2xl text-base-content">If you wanna talk, let's make it happen ✉️</h2>
		<div class="mt-10 flex gap-10 w-full md:flex-row flex-col">
			<div class="flex items-center gap-6">
				<Icon class="text-3xl text-info" icon="uiw:map" />
				<div>
					<h1 class="font-semibold text-xl">Location</h1>
					<span class="text-md">Campo Grande, MS - Brazil</span>
				</div>
			</div>
			<div class="flex items-center gap-6">
				<Icon class="text-3xl text-info" icon="material-symbols:mail-outline" />
				<div class="w-full break-all">
					<h1 class="font-semibold text-xl">Mail</h1>
					<a
						href="mailto:emymonteiro.sweetie@gmail.com"
						target="_blank"
						class="text-ellipsis text-md hover:text-info">emymonteiro.sweetie@gmail.com</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
