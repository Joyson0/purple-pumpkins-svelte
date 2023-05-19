<script>
  import deleteButton from "/src/delete-button.svg";
  export let dlt;
</script>

<img src={deleteButton} on:click={dlt}>

<style>
  img{
    width: 0.8em;
  }
</style>