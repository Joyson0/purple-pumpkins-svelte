<script>
  import Tabs from "./Tabs.svelte";
  import Header from "./Header.svelte";
  import { onMount } from "svelte";
  import { details } from "../stores.js";

  // onMount(async () => {
  //   let url =
  //     "https://script.google.com/macros/s/AKfycbwkkdxW44NAL4-FXcDP5-9BkVw9y_GzaBycSc12V4ZUdD-XL7IZiV5isuvVKKxIExTRWg/exec";
  //   let preUrl = "https://api.allorigins.win/raw?url=";
  //   let res = await fetch(url, { cache: "no-store" });
  //   $details = await res.json();
  // });
</script>

<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  />
</head>
<main>
  <Header />
  <Tabs />
</main>

<style>
  main {
    text-align: center;
  }
</style>
