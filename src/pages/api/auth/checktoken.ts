import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/mock/data";

type ResponseData =
  | {
      message: string;
    }
  | {
      name: string;
      role: "guest" | "customer" | "employee";
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.status(404);
    return;
  }
  const body = JSON.parse(req.body) as { token: string };
  const foundToken = data.accessTokens.find((item) => item.token === body.token);
  if (!foundToken) {
    res.status(401).json({ message: "Токен не найден в базе данных" });
    return;
  }
  const foundUser = data.authUsers.find((item) => item.id === foundToken.authUserId);
  if (!foundUser) {
    res.status(400).json({ message: "Токен найден, но пользователя с таким токеном нет в базе данных" });
    return;
  }

  return res.status(200).json({
    name: foundUser.name,
    role: foundUser.role as any,
  });
}
