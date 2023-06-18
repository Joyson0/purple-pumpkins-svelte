import { shopsCollection } from "../../db/collections";
import { redirect } from "@sveltejs/kit";
// import { shopName } from "../../stores";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    // TODO log the user in
    let formData = await request.formData();
    let password = formData.get("password");
    let shopCode = formData.get("shop");
    let shop = await shopsCollection.findOne({ code: shopCode });
    if (shop.password === password) {
      cookies.set("access", true, { path: "/", sameSite: "strict" });
      cookies.set("shopCode", shopCode, { path: "/", sameSite: "strict" });
      cookies.set("shopName", shop.name, {
        path: "/",
        sameSite: "strict",
        httpOnly: false,
      });
      // shopName.set(shop.name);

      throw redirect(302, "/");
    }
    return {
      message: "Wrong password",
    };
  },
};

export const load = async () => {
  const data = await shopsCollection.find().toArray();
  return {
    shops: data,
  };
};
