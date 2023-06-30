import { outstandingCollection } from "../../db/collections";

/** @type {import('./$types').Actions} */
export const actions = {
  getdates: async ({ request }) => {
    let formData = await request.formData();
    let todate = formData.get("todate");
    let fromdate = formData.get("fromdate");
    return await getDbData(todate, fromdate);
  },
};

async function getDbData(todate, fromdate) {
  let outstandingData;
  outstandingData = outstandingCollection
    .find({
      date: { $gte: fromdate, $lte: todate },
    })
    .toArray();
  return outstandingData;
}
