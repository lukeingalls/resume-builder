import crypto from "crypto";

export const getDateMonthString = (date: Date | null) => {
  if (!date) return date;
  let month = "";
  switch (date.getMonth()) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }
  const year = date.getFullYear().toString();
  return `${month} ${year}`;
};

export const getNonce = (length: number = 5) => {
  return crypto.randomBytes(length).toString("hex");
};
