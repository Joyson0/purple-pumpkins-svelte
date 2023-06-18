import { start_mongo } from "./db/mongo";
import { redirect } from "@sveltejs/kit";

start_mongo()
  .then(() => console.log("mongo started"))
  .catch((e) => console.error(e));

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  let pathname = event.url.pathname;
  let access = event.cookies.get("access");
  let isAccess = access === "true";

  if (pathname === "/login") {
    if (isAccess) {
      throw redirect(307, "/");
    } else {
      // Already on the login page, no need to redirect
      const response = await resolve(event);
      return response;
    }
  }
  if (pathname == "/logout") {
    event.cookies.set("access", false, { path: "/", sameSite: "strict" });
    event.cookies.set("shopCode", "", { path: "/", sameSite: "strict" });
    event.cookies.set("shopName", "", { path: "/", sameSite: "strict" });
    throw redirect(307, "/login");
  }
  if (!isAccess) {
    // Access is not granted, redirect to login page
    throw redirect(307, "/login");
  } else {
    // Access is granted, continue processing the request
    const response = await resolve(event);
    return response;
  }
}
