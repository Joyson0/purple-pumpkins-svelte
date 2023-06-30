<script>
  let today = new Date().toISOString().split("T")[0];
  let todate = today;
  let fromdate = today;
  let OSData = [];
  function getDates(e) {
    e.preventDefault();

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
        OSData = JSON.parse(data).data;
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
      <td>date</td>
      <td>description</td>
      <td>IN</td>
      <td>OUT</td>
      <td>balance</td>
    </tr>
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
