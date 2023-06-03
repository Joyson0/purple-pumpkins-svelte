<script>
  import Tabs from "./Tabs.svelte";
  import { onMount } from "svelte";
  import { details } from "../stores.js";

  async function handleClick() {
    const d = await fetch("/getsheet");
    let jsn = d.json();
    console.log(jsn);
  }

  onMount(async () => {
    let url =
      "https://script.google.com/macros/s/AKfycbwkkdxW44NAL4-FXcDP5-9BkVw9y_GzaBycSc12V4ZUdD-XL7IZiV5isuvVKKxIExTRWg/exec";
    let preUrl = "https://api.allorigins.win/raw?url=";
    let res = await fetch(url, { cache: "no-store" });
    $details = await res.json();
    console.log($details);
  });
</script>

<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  />
</head>
<main>
  <button on:click={handleClick}>click</button>
  <Tabs />
</main>

<style>
  main {
    text-align: center;
  }
</style>
