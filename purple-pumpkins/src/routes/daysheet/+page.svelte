<script>
  import App from "$lib/App.svelte";
  import { salesStore, expensesStore } from "../../stores.js";
  export let data;

  $: ({ sales, expenses } = data);
  $: expensesStore.set(expenses);
  $: salesStore.set(sales);
</script>

<App />
<!-- {#each sales as sale}
  <p><a href="/login/{sale.pos}">{sale.remarks}</a></p>
{/each} -->
