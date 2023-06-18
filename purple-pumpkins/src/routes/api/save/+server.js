import {
  salesCollection,
  expensesCollection,
} from "../../../../src/db/collections";

export async function POST(event) {
  let { date, sales, expenses } = await event.request.json();
  let shopCode = event.cookies.get("shopCode");
  // console.log(sales);
  console.log("from save server", shopCode);

  // updating the sales collection
  await salesCollection.updateOne(
    { shopCode: shopCode, date: new Date(date) },
    { $set: { sales: sales } },
    { upsert: true }
  );

  // updating the expenses collection
  await expensesCollection.updateOne(
    { shopCode: shopCode, date: new Date(date) },
    { $set: { expenses: expenses } },
    { upsert: true }
  );
  return new Response({
    status: 200,
  });
}
