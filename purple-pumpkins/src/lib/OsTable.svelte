<script>
  import { onMount } from "svelte";
  let today = new Date().toISOString().split("T")[0];
  let todate = today;
  let fromdate = today;
  let OSData = [];
  let openingBalance = "";
  onMount(() => {
    getDates();
  });
  function getDates(e) {
    const formData = new URLSearchParams();
    formData.append("fromdate", fromdate);
    formData.append("todate", todate);

    fetch("?/getdates", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        // Handle the response from the server
        let OS_OpenData = JSON.parse(data);
        OS_OpenData = JSON.parse(JSON.parse(OS_OpenData.data)[0]);
        openingBalance = OS_OpenData.openingBalance;
        OSData = OS_OpenData.outstandingData;
        OSData.forEach((x) => {
          switch (x.mot) {
            case "purchase":
              x.description = `Purchase: ${x.supplier} ${x.invoice}`;
              x.in = x.amount;
              x.out = "";
              break;
            case "payment_cash":
              x.description = "Cash";
              x.in = "";
              x.out = x.amount;
              break;
            case "payment_cheque":
              x.description = `Cheque #${x.cheque_number} (${x.cheque_date})`;
              x.in = "";
              x.out = x.amount;
              break;
            case "payment_bank":
              x.description = "Bank Transfer";
              x.in = "";
              x.out = x.amount;
              break;
            default:
              x.description = `PReturn: ${x.supplier} ${x.return_number}`;
              x.in = "";
              x.out = x.amount;
              break;
          }
          x.date = x.date.toString().split("T")[0];
        });
        OSData = OSData;
        console.log(OSData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
</script>

<div class="container">
  <input type="date" name="fromdate" bind:value={fromdate} max={todate} />
  to
  <input
    type="date"
    name="todate"
    bind:value={todate}
    max={today}
    min={fromdate}
  />
  <button on:click={getDates}>GO</button>
</div>

<table>
  <thead>
    <th>Date</th>
    <th>Description</th>
    <th>IN</th>
    <th>OUT</th>
    <th>Balance</th>
  </thead>
  <tbody>
    <tr>
      <td>{fromdate}</td>
      <td>Opening Balance</td>
      <td />
      <td />
      <td>{openingBalance}</td>
    </tr>
    {#each OSData as transaction}
      <tr>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.in}</td>
        <td>{transaction.out}</td>
        <td>{transaction.balance}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  div.container {
    display: flex;
    justify-content: center;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin: auto;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: center;
    min-width: 2.5rem;
  }
</style>
