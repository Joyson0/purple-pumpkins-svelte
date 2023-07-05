<script>
  import { createEventDispatcher } from "svelte";
  let date, amount, cheque_date, cheque_number;
  const dispatch = createEventDispatcher();

  function onCancel() {
    dispatch("close");
  }

  function submit() {
    dispatch("submit", {
      date,
      amount,
      cheque_date,
      cheque_number,
    });
  }
</script>

<label for="date">Date</label>
<input type="date" name="date" bind:value={date} />
<label for="amount">Amount</label>
<input type="number" name="amount" bind:value={amount} />
<label for="cheque_date">Cheque Date</label>
<input type="date" name="cheque_date" bind:value={cheque_date} />
<label for="cheque_number">Cheque Number</label>
<input type="number" name="cheque_number" bind:value={cheque_number} />

<button on:click={submit}>Submit</button>
<button on:click={onCancel}>Cancel</button>
