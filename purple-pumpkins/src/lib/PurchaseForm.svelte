<script>
  import { createEventDispatcher } from "svelte";
  let date, supplier, invoice, amount;
  const dispatch = createEventDispatcher();

  function onCancel() {
    dispatch("close");
  }

  function submit() {
    dispatch("submit", {
      date,
      supplier,
      invoice,
      amount,
    });
  }
</script>

<label for="date">Date</label>
<input type="date" name="date" bind:value={date} />
<label for="supplier">Supplier</label>
<select name="supplier" bind:value={supplier}>
  <option value="Antler">Antler</option>
  <option value="SPJ">SPJ</option>
</select>
<label for="invoice">Invoice Number</label>
<input type="number" name="invoice" bind:value={invoice} />
<label for="amount">Amount</label>
<input type="number" name="amount" bind:value={amount} />

<button on:click={submit}>Submit</button>
<button on:click={onCancel}>Cancel</button>
