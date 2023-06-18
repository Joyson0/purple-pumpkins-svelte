import { salesCollection } from "../db/collections";

// sales.insertOne({
//   shopCode: "ut_unichira",
//   date: "2023-11-06",
//   sales: [
//     {
//       pos: 1,
//       inoice: 4586,
//       beforeDiscount: 1008,
//       cash: 500,
//       card: 300,
//       upi: 200,
//       remarks: "discount 8",
//     },
//   ],
// });
// const filter = { shopCode: "ut_kombara", date: "2023-11-06" };
// const update = {
//   $push: {
//     sales: {
//       $each: [
//         {
//           pos: 2,
//           invoice: 4587,
//           beforeDiscount: 1200,
//           cash: 600,
//           card: 400,
//           upi: 200,
//           remarks: "no discount",
//         },
//       ],
//       $position: 1,
//     },
//   },
// };
// const options = { upsert: true };

// const result = await sales.updateOne(filter, update, options);

// let data = staffs.aggregate([
//   {
//     $group: {
//       _id: "$salary",
//       total: {
//         $count: {},
//       },
//     },
//   },
// ]);
// console.log(await data.toArray());

// let test = await salesCollection.findOne({
//   shopCode: "ut_unichira",
//   date: "13-06-2023",
// });
// console.log(test);
