import db from "./mongo";

export const daySheets = db.collection("daySheets");
export const shops = db.collection("shops");
