import data from "@/mock/data";
import { customParseInt } from "@/utils/customParseInt";
import type { NextApiRequest, NextApiResponse } from "next";
type ResponseData = Array<(typeof data.insuranceCompanies)[number]>;

const testCompanies = data.insuranceCompanies
  .map((company) => {
    const count = 20;
    return Array(count)
      .fill(company)
      .map((item: typeof company, i) => {
        const copy = { ...item };
        copy.id = copy.id + count + i;
        copy.name += "_dupli_" + i;

        return copy;
      });
  })
  .flat();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") {
    res.status(404).end();
    return;
  }

  const offset = customParseInt(req.query.offset) ?? 0;
  const limit = customParseInt(req.query.limit) ?? 20;
  const search = req.query.search;

  const filteredCompanies = (() => {
    if (search && !Array.isArray(search)) {
      return testCompanies.filter((item) =>
        item.name.toUpperCase().includes(search.toUpperCase())
      );
    }
    return testCompanies;
  })();

  filteredCompanies.sort((a, b) => a.id - b.id);

  res.status(200).json(filteredCompanies.slice(offset, offset + limit));
}
