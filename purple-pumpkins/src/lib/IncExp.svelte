<script>
  import Income from "./Income.svelte";
  import Expense from "./Expense.svelte";
  import AddButton from "./AddButton.svelte";
  import { details, expensesStore } from "../stores.js";

  let expenses = [
    {
      id: 0,
      description: "",
      amount: null,
      category: "Supplier",
    },
  ];

  $: expenses = $expensesStore;

  $: {
    expensesStore.set(expenses);
  }

  function addExpense(params) {
    expenses = [
      ...expenses,
      {
        id: expenses[expenses.length - 1].id + 1,
        description: "",
        amount: null,
        category: "Supplier",
      },
    ];
  }
  // $: expenses = $details.expenses;
</script>

<Income />
<Expense bind:expenses />
<AddButton add={addExpense} />
