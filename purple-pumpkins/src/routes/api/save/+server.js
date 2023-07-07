import {
  salesCollection,
  expensesCollection,
  outstandingsCollection,
} from "../../../../src/db/collections";

export async function POST(event) {
  let shopCode = event.cookies.get("shopCode");
  let eventObj = await event.request.json();
  if (eventObj.from === "daysheet") {
    let { date, sales, expenses } = eventObj;

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
  }
  if (eventObj.from === "outstandings") {
    delete eventObj.from;
    eventObj.shopCode = shopCode;
    eventObj.date = new Date(eventObj.date);
    await outstandingsCollection.insertOne(eventObj);
  }
  return new Response({ status: 200 });
}
