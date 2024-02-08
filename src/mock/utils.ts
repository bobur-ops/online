import { NextApiRequest } from "next";
import data from "./data";

export function isAuthorized(res: NextApiRequest): boolean {
  const token = res.headers['Authorization']
  if (!token) {
    return false;
  }

  const found = data.accessTokens.find((item) => item.token === token)
  
  if (!found) {
    return false;
  }

  return true;
}
