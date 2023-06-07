import { shops } from "../../db/collections";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    // TODO log the user in
    let formData = await request.formData();
    console.log(...formData);
    let password = formData.get("password");
    let shopCode = formData.get("shop");
    let shop = await shops.findOne({ code: shopCode });
    if (shop.password === password) {
      cookies.set("access", true, { path: "/", sameSite: "strict" });
      throw redirect(302, "/daysheet");
    }
    return {
      message: "Wrong password",
    };
  },
};

export const load = async () => {
  const data = await shops.find().toArray();

  return {
    shops: data,
  };
};
