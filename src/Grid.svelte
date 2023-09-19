<script lang="ts">
	import Icon from '@iconify/svelte';
	import { getEven } from './utils/helper';
	export let index: number;
</script>

<section
	class={`h-[calc(100vh+5rem)] md:h-[calc(100vh-5rem)] ${
		!getEven(index) ? 'bg-base-100' : 'bg-base-200'
	} flex items-center justify-center`}
>
	<div class="flex flex-col w-full items-center md:max-w-4xl max-w-lg">
		<div
			class={`flex ${!getEven(index) ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col-reverse
			items-center w-full overflow-hidden`}
		>
			<div class="md:w-[50%]">
				<slot name="content" />
			</div>
			<div class="md:w-[50%] w-full pb-8 md:pb-0 md:h-96 ml-auto flex items-center justify-center">
				<slot name="img" />
			</div>
		</div>
		<div class="mt-32 md:mt-0 w-full md:max-w-4xl md:pl-8 pl-0 ml-8 md:ml-0">
			<slot name="footer" />
		</div>
	</div>
</section>
