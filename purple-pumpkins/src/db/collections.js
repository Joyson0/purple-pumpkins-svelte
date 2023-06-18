import db from "./mongo";

export const daySheetsCollection = db.collection("daySheets");
export const shopsCollection = db.collection("shops");
export const staffsCollection = db.collection("staffs");
export const salesCollection = db.collection("sales");
export const expensesCollection = db.collection("expenses");
