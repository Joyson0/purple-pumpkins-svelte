<script>
  import App from "$lib/App.svelte";
  export let data;
  $: ({ shops } = data);
</script>

<App />
{#each shops as shop}
  <p><a href="/login/{shop.code}">{shop.name}</a></p>
{/each}
