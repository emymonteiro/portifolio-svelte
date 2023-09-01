<script lang="ts">
	import '../app.css';
	import Header from '../Header.svelte';
</script>

<div>
	<Header />
	<slot />
	<div class="px-5" />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Kablammo&family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
	* {
		font-family: 'League Spartan', 'Open Sans', sans-serif;
	}
</style>
