import crypto from "crypto";

export const getNonce = (length: number = 5) => {
  return crypto.randomBytes(length).toString("hex");
};
