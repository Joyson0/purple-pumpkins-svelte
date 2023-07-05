<script>
  import { createEventDispatcher } from "svelte";

  export let isOpen = false;

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch("close");
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      handleClose();
    }
  }
</script>

{#if isOpen}
  <div class="modal" on:keydown={handleKeyDown} tabindex="-1">
    <div class="modal-content">
      <slot />
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
