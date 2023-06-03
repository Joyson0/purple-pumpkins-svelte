<script>
	import Income from "./Income.svelte";
	import Expense from "./Expense.svelte";
	import AddButton from "./AddButton.svelte";
	import ApiCall from "./ApiCall.svelte"
	import { details } from '../stores.js'
	
	let expenses = [
	  {
			id: 0,
	    description: "",
	    amount: null,
	    category: "Supplier"
	  }
	];
	async function update(){
		let url = "https://script.google.com/macros/s/AKfycbwkkdxW44NAL4-FXcDP5-9BkVw9y_GzaBycSc12V4ZUdD-XL7IZiV5isuvVKKxIExTRWg/exec"
    	let preUrl = "https://api.allorigins.win/raw?url="
    	let res = await fetch(url, {cache: "no-store"})
		expenses = exp.expenses
		console.log(exp)
    }
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
	$: expenses = $details.expenses
</script>

<Income/>
<ApiCall {update}/>
<Expense bind:expenses={expenses}/>
<AddButton add={addExpense}/>