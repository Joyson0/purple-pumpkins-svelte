<script>
  export let sale_summaryObj;
  var total = {}; // an object to store the sums
  // initialize the sums to zero
  $: total = { cash: 0, card: 0, upi: 0, obj: sale_summaryObj };
  $: for (let key in sale_summaryObj) {
    // add the values of each property
    total.cash += sale_summaryObj[key].cash;
    total.card += sale_summaryObj[key].card;
    total.upi += sale_summaryObj[key].upi;
  }
</script>
<div class="container">
<table>
  <caption>Sale Summary</caption>
  <thead>
    <tr>
      <th>POS</th>
      <th>Cash</th>
      <th>Card</th>
      <th>UPI</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
  {#each Object.entries(sale_summaryObj) as [pos, mops]}
    <tr>
      <td>{pos}</td>
      <td>{mops.cash}</td>
      <td>{mops.card}</td>
      <td>{mops.upi}</td>
      <td>{mops.cash+mops.card+mops.upi}</td>
    </tr>
  {/each}
    <tr>
      <td>Total</td>
      <td>{total.cash}</td>
      <td>{total.card}</td>
      <td>{total.upi}</td>
      <td>{total.cash + total.card + total.upi}</td>
    </tr>
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
  }
</style>