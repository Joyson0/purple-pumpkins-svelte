import { shops } from "../../../db/collections";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    // TODO log the user in
    let data = await event.request.formData();
    let password = data.get("password");
    let shopCode = event.params.slug;
    let shop = await shops.findOne({ code: shopCode });
    if (shop.password === password) {
      console.log("logged in");
    }
  },
};
