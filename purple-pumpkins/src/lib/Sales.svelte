<script>
  import AddButton from "./AddButton.svelte";
  import SaleSummary from "./SaleSummary.svelte";
  import SaleTable from "./SaleTable.svelte";
  import { salesStore } from "../stores.js";
  let sale_summaryObj = {};
  // let sales = [
  //   {
  //     id: 0,
  //     pos: "1",
  //     invoice: "",
  //     beforeDiscount: "",
  //     cash: "",
  //     card: "",
  //     upi: "",
  //     remarks: "",
  //   },
  // ];

  // $: sales = $details.sales;
  $: sales = $salesStore;

  $: {
    salesStore.set(sales);
  }

  function setValue() {
    let poss = new Set(sales.map((sale) => sale.pos));
    sale_summaryObj = {};
    poss.forEach((pos) => {
      sale_summaryObj[pos] = {
        cash: sales
          .filter(function (sale) {
            return sale.pos == pos;
          })
          .reduce((acc, sale) => acc + Number(sale.cash), 0),
        card: sales
          .filter(function (sale) {
            return sale.pos == pos;
          })
          .reduce((acc, sale) => acc + Number(sale.card), 0),
        upi: sales
          .filter(function (sale) {
            return sale.pos == pos;
          })
          .reduce((acc, sale) => acc + Number(sale.upi), 0),
      };
    });
  }
</script>

<SaleSummary {sale_summaryObj} />
<SaleTable {setValue} {sales} />

<br />
<AddButton
  add={() => {
    sales = [
      ...sales,
      {
        id: sales.length,
        pos: sales[sales.length - 1].pos,
        invoice: Number(sales[sales.length - 1].invoice) + 1,
        beforeDiscount: null,
        cash: null,
        card: null,
        upi: null,
        remarks: null,
      },
    ];
  }}
/>
