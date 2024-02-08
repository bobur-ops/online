import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/mock/data";

function randomInt(start: number, end: number) {
  return start + Math.round(Math.random() * (end - start));
}
function randomBoolean() {
  return Boolean(Math.round(Math.random()));
}
const alph = "abcdefghijklmnopqrstuvwxyz";
function genRandomString(length: number) {
  return Array(length)
    .fill("")
    .map(() => {
      const c = alph[randomInt(0, alph.length - 1)];
      return randomBoolean() ? c.toUpperCase() : c;
    })
    .join("");
}

type ResponseData =
  | {
      message: string;
    }
  | {
      credentials: {
        name: string;
        role: "guest" | "customer" | "employee";
      }
      token: string;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = JSON.parse(req.body) as { email: string; password: string };
  const foundUser = data.authUsers.find(
    (item) => item.email === body.email && item.password === body.password
  );
  if (!foundUser) {
    return res.status(401).json({ message: "Неверные электронная почта или пароль" });
  }

  const foundToken = data.accessTokens.find((item) => item.authUserId === foundUser.id)!;

  // const token = genRandomString(32);
  // data.accessTokens.push({
  //   authUserId: foundUser.id,
  //   token: token,
  // });

  return res.status(200).json({
    credentials: {
      name: foundUser.name,
      role: foundUser.role as any,
    },
    token: foundToken.token,
  });
}
