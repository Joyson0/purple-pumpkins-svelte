<script>
  import { onMount } from "svelte";
  import { dateStore, salesStore, expensesStore } from "../stores.js";

  let shopName;
  let date = $dateStore;
  // Function to read a cookie by name
  function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  function logout() {
    document.cookie = `access=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }
  onMount(() => {
    shopName = getCookie("shopName");
  });
  async function save() {
    await fetch("/api/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: $dateStore,
        sales: $salesStore,
        expenses: $expensesStore,
      }),
    });
    // console.log("sales store from client", $salesStore);
  }
  async function goDate() {
    $dateStore = date;
    const formData = new URLSearchParams();
    formData.append("date", $dateStore);
    let res = await fetch(`?/godate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Set the correct content type
      },
      body: formData.toString(), // Convert the form data to a string
    });
    let responseData = await res.json();
    let x = JSON.parse(responseData.data);
    let y = JSON.parse(x[2]);
    $salesStore = y["data"]["sales"];
    $expensesStore = y["data"]["expenses"];
  }
</script>

<div class="header row align-items-center">
  <div class="col-auto">
    <h6>{shopName}</h6>
  </div>
  <div class="col-auto">
    <input
      type="date"
      name="date"
      id="date"
      max={new Date().toISOString().split("T")[0]}
      bind:value={date}
    />
  </div>
  <div class="col-auto">
    <button class="btn btn-primary btn-sm" on:click={goDate}>GO</button>
  </div>
  <div class="col-auto">
    <button class="btn btn-primary btn-sm" on:click={logout}>logout</button>
  </div>
  <div class="col-auto">
    <button class="btn btn-primary btn-sm" on:click={save}>Save</button>
  </div>
</div>

<style>
  .header {
    background-color: #d8a9f3;
  }
</style>
