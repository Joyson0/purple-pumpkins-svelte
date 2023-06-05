import { shops } from "../db/collections";

export const load = async () => {
  const data = await shops.find().toArray();

  console.log("data", data);
  return {
    shops: data,
  };
};
