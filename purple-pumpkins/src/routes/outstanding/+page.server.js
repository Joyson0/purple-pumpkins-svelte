import { outstandingsCollection } from "../../db/collections";

/** @type {import('./$types').Actions} */
export const actions = {
  getdates: async ({ request, cookies }) => {
    const shopCode = cookies.get("shopCode");
    let formData = await request.formData();
    let todate = formData.get("todate");
    let fromdate = formData.get("fromdate");
    todate = new Date(todate);
    fromdate = new Date(fromdate);
    return await getDbData(fromdate, todate, shopCode);
  },
};

async function getDbData(fromdate, todate, shopCode) {
  let outstandingData;
  outstandingData = await outstandingsCollection
    .find({
      date: { $gte: fromdate, $lte: todate },
      shopCode: shopCode,
    })
    .sort({ date: 1 })
    .toArray();
  return JSON.stringify(outstandingData);
}
