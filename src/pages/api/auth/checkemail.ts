import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/mock/data";

type ResponseData =
  | {
      message: string;
    }
  | {
      exist: boolean;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.status(404);
    return;
  }
  const body = JSON.parse(req.body) as {
    email: string;
    role: "guest" | "customer" | "employee";
    subsidiaryId: string;
  };
  const email = body.email as string;
  const found = data.authUsers.find((item) => {
    return (
      item.email === body.email && item.role === body.role
      // &&
      // item.subsidiaryId.toString() === body.subsidiaryId
    );
  });
  res.status(200).json({ exist: found !== undefined });
}
