import { shops } from "../../db/collections";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    const data = await shops.find().toArray();

    console.log("data", data);
    return {
      shops: data,
    };
  },
};
