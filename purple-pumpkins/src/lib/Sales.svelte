<script>
  import AddButton from "./AddButton.svelte";
  import SaleSummary from "./SaleSummary.svelte";
  import SaleTable from "./SaleTable.svelte";
  // let cash1, card1, upi1, cash2, card2, upi2;
  let sale_summaryObj = {};
  let rows = [
    {
      id: 0,
      pos: "1",
      invoice: "",
      beforeDiscount: "",
      cash: "",
      card: "",
      upi: "",
      remarks: ""
    }
  ];

  function setValue(e) {
    // let id = e.target.parentElement.parentElement.id;
    // let objName = e.target.name;
    // let value = e.target.value;
    // rows[id][objName] = value;
    console.log(rows);
    let poss = new Set(rows.map(row => row.pos));
    sale_summaryObj = {};
    poss.forEach(pos => {
      sale_summaryObj[pos] = {
        cash: rows
          .filter(function(row) {
            return row.pos == pos;
          })
          .reduce((acc, row) => acc + Number(row.cash), 0),
        card: rows
          .filter(function(row) {
            return row.pos == pos;
          })
          .reduce((acc, row) => acc + Number(row.card), 0),
        upi: rows
          .filter(function(row) {
            return row.pos == pos;
          })
          .reduce((acc, row) => acc + Number(row.upi), 0)
      };
    });
  }
  // $: {
  //   let floor1 = rows.filter(function(row) {
  //     return row.floor == "1";
  //   });
  //   cash1 = floor1.reduce((acc, row) => acc + Number(row.cash), 0);
  //   card1 = floor1.reduce((acc, row) => acc + Number(row.card), 0);
  //   upi1 = floor1.reduce((acc, row) => acc + Number(row.upi), 0);
  //   let floor2 = rows.filter(function(row) {
  //     return row.floor == "2";
  //   });
  //   cash2 = floor2.reduce((acc, row) => acc + Number(row.cash), 0);
  //   card2 = floor2.reduce((acc, row) => acc + Number(row.card), 0);
  //   upi2 = floor2.reduce((acc, row) => acc + Number(row.upi), 0);
  // }
</script>

<SaleSummary {sale_summaryObj}/>
<SaleTable {setValue} {rows} />

  <br>
<AddButton add={() => {
  rows = [...rows, {
    id: rows.length,
    pos: rows[rows.length - 1].pos,
    invoice: Number(rows[rows.length - 1].invoice) + 1,
    beforeDiscount: null,
    cash: null,
    card: null,
    upi: null,
    remarks: null
  }];
}} />