<script>
  export let expenses;
  import { expensesStore } from "../stores.js";
  import DeleteButton from "./DeleteButton.svelte";
  function deleteRow(e) {
    let row = e.target.closest("tr").getAttribute("id");
    console.log("row id", row);
    expenses = expenses.filter((expense) => expense.id != row);
    expensesStore.set(expenses);
  }
</script>

<table>
  <caption>EXPENSE</caption>
  <thead>
    <th>Description</th>
    <th>Amount</th>
    <th>Category</th>
  </thead>
  <tbody>
    {#each expenses as expense}
      <tr id={expense.id}>
        <td><input type="text" bind:value={expense.description} /></td>
        <td
          ><input
            class="amount"
            type="number"
            bind:value={expense.amount}
          /></td
        >
        <td>
          <select class="category" bind:value={expense.category}>
            <option value="Supplier">Supplier</option>
            <option value="Stationary">Stationary</option>
            <option value="Tea & Water">Tea & Water</option>
            <option value="Wages">Wages</option>
            <option value="Maintanance">Maintanance</option>
            <option value="Travelling">Travelling</option>
            <option value="Courier">Courier</option>
            <option value="Printing">Printing</option>
            <option value="Bank Charges">Bank Charges</option>
            <option value="Charity & Donation">Donation</option>
            <option value="Sales Promo">Sales Promo</option>
            <option value="Others">Others</option>
          </select>
        </td>
        <td>
          {#if expense.id != 0}
            <DeleteButton dlt={deleteRow} />
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  input.amount {
    max-width: 4rem;
  }
  .category {
    max-width: 6em;
  }
  table {
    width: 90%;
  }
</style>
