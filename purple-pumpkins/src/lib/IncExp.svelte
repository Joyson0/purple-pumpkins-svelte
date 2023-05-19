<script>
	import Income from "./Income.svelte";
	import Expense from "./Expense.svelte";
	import AddButton from "./AddButton.svelte";
	
	let expenses = [
	  {
			id: 0,
	    description: "",
	    amount: null,
	    category: "Supplier"
	  }
	];
	function addExpense(params) {
	  expenses = [
	    ...expenses,
	    {	id: expenses[expenses.length-1].id + 1,
	      description: "",
	      amount: null,
	      category: "Supplier"
	    }
	  ];
	}
</script>

<Income/>
<Expense bind:expenses={expenses}/>
<AddButton add={addExpense}/>