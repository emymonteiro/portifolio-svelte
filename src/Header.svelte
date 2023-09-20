<script lang="ts">
	import Icon from '@iconify/svelte';

	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function fixScroll(scroll: boolean = true) {
		showMenu = false;
		let height = y > 40 ? -80 : -160;
		if (scroll) {
			setTimeout(() => {
				window.scrollBy({
					left: 0,
					top: height,
					behavior: 'smooth'
				});
			}, 50);
		}
	}

	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<header class={` ${y > 40 ? 'bg-base-100 shadow-md fixed' : 'bg-base-200'}  w-full transition-all`}>
	<nav class="flex md:flex-row flex-col justify-between relative">
		<div class="w-full justify-between items-center flex px-5 h-20">
			<span class="font-bold text-2xl"> Emilly Monteiro </span>
			<button on:click={toggleMenu}>
				{#if !showMenu}
					<Icon class="text-3xl cursor-pointer block md:hidden" icon="prime:list" />
				{:else}
					<Icon class="text-3xl cursor-pointer block md:hidden" icon="material-symbols:close" />
				{/if}
			</button>
		</div>
		<div class={`md:flex justify-start items-start px-5 ${showMenu ? 'flex' : 'hidden'}`}>
			<ul
				class="text-lg font-semibold flex md:flex-row md:h-20 flex-col md:gap-5 gap-8 md:p-0 pb-5 md:items-center"
			>
				<li class="hover:text-gray-500">
					<a href="#Home" on:click={() => fixScroll()}>Home</a>
				</li>
				<li class="hover:text-gray-500">
					<a href="#About" on:click={() => fixScroll()}>About</a>
				</li>
				<li class="hover:text-gray-500">
					<a href="#Projects" on:click={() => fixScroll()}>Projects</a>
				</li>
				<li class="hover:text-gray-500">
					<a href="#Contact" on:click={() => fixScroll(false)}>Contact</a>
				</li>
			</ul>
		</div>
	</nav>
</header>
