<script>
  import { createEventDispatcher } from "svelte";
  let date, amount;
  const dispatch = createEventDispatcher();

  function onCancel() {
    dispatch("close");
  }

  function submit() {
    dispatch("submit", {
      date,
      amount,
      type: "out",
    });
  }
</script>

<label for="date">Date</label>
<input type="date" name="date" bind:value={date} />
<label for="amount">Amount</label>
<input type="number" name="amount" bind:value={amount} />

<button on:click={submit}>Submit</button>
<button on:click={onCancel}>Cancel</button>
