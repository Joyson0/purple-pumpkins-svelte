<script>
  import PurchaseForm from "./PurchaseForm.svelte";
  import PaymentCashBankForm from "./PaymentCashBankForm.svelte";
  import PaymentCheque from "./PaymentCheque.svelte";
  import PurchaseRetrunForm from "./PurchaseReturnForm.svelte";
  import Modal from "./Modal.svelte";
  let mot;
  let showModal = false;
  function toggleModal() {
    showModal = !showModal;
  }
  async function handleSubmit(e) {
    await fetch("/api/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "outstandings",
        mot,
        ...e.detail,
      }),
    });
    showModal = false;
  }
</script>

<select name="" id="" bind:value={mot}>
  <option value="purchase">Purchase</option>
  <option value="payment_cash">Payment:Cash</option>
  <option value="payment_cheque">Payment:Cheque</option>
  <option value="payment_bank">Payment:Bank Transfer</option>
  <option value="purchase_return">Purchase Return</option>
</select>
<button on:click={toggleModal}>ADD</button>

<Modal isOpen={showModal} on:close={toggleModal}>
  {#if mot === "purchase"}
    <PurchaseForm on:submit={handleSubmit} on:close={toggleModal} />
  {:else if mot === "payment_bank" || mot === "payment_cash"}
    <PaymentCashBankForm on:submit={handleSubmit} on:close={toggleModal} />
  {:else if mot === "payment_cheque"}
    <PaymentCheque on:submit={handleSubmit} on:close={toggleModal} />
  {:else if mot === "purchase_return"}
    <PurchaseRetrunForm on:submit={handleSubmit} on:close={toggleModal} />
  {/if}
</Modal>
