<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />

<article class="prose m-8 max-w-screen-lg justify-self-center">
	{@render children()}
</article>
