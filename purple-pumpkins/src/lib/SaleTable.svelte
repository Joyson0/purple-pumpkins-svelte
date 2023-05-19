<script>
 export let rows;
 export let setValue;
</script>

<div class="container" >
<table border="1">
	<caption>Sales</caption>
	<thead>
		<tr>
			<th>POS</th>
			<th>Invoice</th>
			<th>B4Disc</th>
			<th>Cash</th>
			<th>Card</th>
			<th>UPI</th>
			<th>Remarks</th>
		</tr>
	</thead>
	<tbody>
	{#each rows as row}
		<tr id={row.id}>
			<td><input name="pos" type="number" on:blur={setValue} bind:value={row.pos}></td>
			<td><input name="invoice" type="number" on:blur={setValue} bind:value={row.invoice}></td>
			<td><input name="beforeDiscount" type="number" on:blur={setValue} bind:value={row.beforeDiscount}></td>
			<td><input name="cash" type="number" on:blur={setValue} bind:value={row.cash}></td>
			<td><input name="card" type="number" on:blur={setValue} bind:value={row.card}></td>
			<td><input name="upi" type="number" on:blur={setValue} bind:value={row.upi}></td>
			<td><input name="remarks" type="text" on:blur={setValue} bind:value={row.remarks}></td>
		</tr>
		{/each}
	</tbody>
</table>
</div>
<style>
  div.container {
    display: flex;
    justify-content: center;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: center;
    min-width: 2.5rem;
  }
  input {
    width: 90%;
    border: 0px none transparent;
    text-align: center;
    outline: none;
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>