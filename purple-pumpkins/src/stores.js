import { writable } from "svelte/store";

export let details = writable({
  expenses: [{ id: null, description: null, amount: null, category: null }],
  sales: [
    {
      id: null,
      pos: null,
      invoice: null,
      beforeDiscount: null,
      cash: null,
      card: null,
      upi: null,
      remarks: null,
    },
  ],
});
