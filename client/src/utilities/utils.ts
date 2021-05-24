import crypto from "crypto";

export const getDateMonthString = (date: Date | null) => {
  if (!date) return "Present";
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  if (month >= 10) return `${year}-${month}`;
  return `${year}-0${month}`;
};

export const getNonce = (length: number = 5) => {
  return crypto.randomBytes(length).toString("hex");
};
