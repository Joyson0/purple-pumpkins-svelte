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

export let shopCodeStore = writable("");
export let dateStore = writable(new Date().toISOString().split("T")[0]);

export let salesStore = writable([
  {
    id: 0,
    pos: "1",
    invoice: "",
    beforeDiscount: "",
    cash: "",
    card: "",
    upi: "",
    remarks: "",
  },
]);

export let expensesStore = writable(null);
