<!-- src/App.svelte -->
<script>
	import { Router, basepath } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  $basepath = '/github-jobs-svelte';
  </script>
  
  <Router {routes} />