<script>
	import Resume from '$lib/resume.markdown';
	import Contact from '$lib/Contact.svelte';
	import Print from '$lib/Print.svelte';
</script>

<Resume>
	<Contact />
	<div class="mt-4">
		<Print />
	</div>
</Resume>

<div class="no-print">
	<hr />

	<p>
		The source code for this resume is available on GitHub at <a
			href="https://github.com/hasti-d/Hasti-D.GitHub.io"
			target="_blank">hasti-d/Hasti-D.GitHub.io</a
		>
	</p>
</div>
