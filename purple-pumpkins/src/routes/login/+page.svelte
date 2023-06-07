<script>
  export let data;
  export let form;
  $: ({ shops } = data);
</script>

<form method="POST">
  <h1>Login</h1>
  {#if form?.message}
    <p style="color: red">{form.message}</p>
  {/if}
  <label>
    Select Shop
    <select name="shop">
      {#each shops as shop (shop.code)}
        <option value={shop.code}>{shop.name}</option>
      {/each}
    </select></label
  >

  <label>
    Password
    <input name="password" type="password" />
  </label>
  <button>Log in</button>
</form>
