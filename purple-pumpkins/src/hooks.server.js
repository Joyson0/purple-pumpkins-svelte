import { start_mongo } from "./db/mongo";
import { redirect } from "@sveltejs/kit";

start_mongo()
  .then(() => console.log("mongo started"))
  .catch((e) => console.error(e));

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  let pathname = event.url.pathname;
  let isAccess = event.cookies.get("access");

  if (pathname === "/login") {
    if (isAccess) {
      throw redirect(307, "/");
    } else {
      // Already on the login page, no need to redirect
      const response = await resolve(event);
      return response;
    }
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
