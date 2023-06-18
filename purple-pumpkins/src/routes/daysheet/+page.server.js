import { salesCollection, expensesCollection } from "../../db/collections";
import { dateStore, shopCodeStore } from "../../stores";

// /** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
  shopCodeStore.set(cookies.get("shopCode"));
  return await getDbData(cookies.get("shopCode"));
};

/** @type {import('./$types').Actions} */
export const actions = {
  godate: async ({ request }) => {
    let formData = await request.formData();
    let date = formData.get("date");
    console.log("from save server", date);
    let code;
    let shopCodeUsub = shopCodeStore.subscribe((value) => {
      code = value;
    });
    shopCodeUsub();
    let dbData = await getDbData(code, date);
    console.log(dbData);
    // Manually construct the response object with the desired structure
    let response = {
      type: "success",
      status: 200,
      data: {
        expenses: dbData.expenses,
        sales: dbData.sales,
      },
    };

    return {
      status: 200,
      body: JSON.stringify(response),
    };
  },
};

async function getDbData(shopCode, dateString) {
  // getting the date from the store
  // let dateString;

  // let dateUnsub = dateStore.subscribe((value) => {
  //   dateString = value;
  // });
  // console.log("date from store in server", dateString);
  // getting the sales data
  let salesData;
  salesData = await salesCollection.findOne({
    date: new Date(dateString),
    shopCode: shopCode,
  });

  // set initial sales data if it doesn't exist
  if (salesData == null) {
    salesData = {
      sales: [
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
      ],
    };
  }

  // getting the expenses data
  let expensesData;
  expensesData = await expensesCollection.findOne({
    date: new Date(dateString),
    shopCode: shopCode,
  });

  // set initial expenses data if it doesn't exist
  if (expensesData == null) {
    expensesData = {
      expenses: [{ id: 0, description: "", amount: "", category: "Supplier" }],
    };
  }
  // dateUnsub();
  return {
    expenses: expensesData.expenses,
    sales: salesData.sales,
  };
}
