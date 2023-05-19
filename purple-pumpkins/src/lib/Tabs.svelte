<script>
	import Sales from "./Sales.svelte";
	import IncExp from "./IncExp.svelte";
	let currentpage = "IncExp";
</script>
<div class="tabs">
<button class="tablink" on:click={()=> currentpage = "Sales"}>Sales</button>
<button class="tablink" on:click={()=>currentpage = "IncExp"}>Inc&Exp</button>
<button class="tablink" on:click={()=>currentpage = "Tab3"}>Tab3</button>
<button class="tablink" on:click={()=>currentpage = "Tab4"}>Attendance</button>
</div>
<div id="Sales" class="tabcontent" style="display: {currentpage == 'Sales' ? 'block' : 'none'}">
	<Sales/>
</div>

<div id="IncExp" class="tabcontent" style="display: {currentpage == 'IncExp' ? 'block' : 'none'}">
	<IncExp/>
</div>

<div id="Contact" class="tabcontent" style="display: {currentpage == 'Tab3' ? 'block' : 'none'}">
	<h3>Tab3</h3>
</div>

<div id="About" class="tabcontent" style="display: {currentpage == 'Tab4' ? 'block' : 'none'}">
	<h3>Tab4</h3>
</div>

<style>
  .tablink {
    background-color: purple;
    color: white;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 4px 6px;
    font-size: 1rem;
    width: 25%;
  }
  .tabs {
    width: 99%;
    padding: 0% 1% 0 1%;
  }
  .tabcontent {
    display: none;
    padding-top: 2rem;
    height: 100%;
  }
</style>