import data from "@/mock/data";
import type { NextApiRequest, NextApiResponse } from "next";
type ResponseData = Array<
  (typeof data.subsidiaries)[number] & { townName: string | null }
>;

const testSubsidiaries = data.subsidiaries
  .map((subsidiary) => {
    const count = 20;
    return Array(count)
      .fill(subsidiary)
      .map((item: typeof subsidiary, i) => {
        const copy = { ...item };
        copy.id = copy.id * count + i;
        copy.name += "_dupli_" + i;
        return copy;
      });
  })
  .flat();

function customParseInt(value: any) {
  if (typeof value !== "string") {
    return undefined;
  }
  try {
    return Number.parseInt(value);
  } catch (e: any) {
    return undefined;
  }
}

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

  const filteredSubsidiaries = (() => {
    if (search && !Array.isArray(search)) {
      return testSubsidiaries.filter(
        (item) =>
          item.name.toUpperCase().includes(search.toUpperCase()) ||
          item.address.toUpperCase().includes(search.toUpperCase()) ||
          item.email?.toUpperCase().includes(search.toUpperCase()) ||
          item.phone?.toUpperCase().includes(search.toUpperCase())
      );
    }
    return testSubsidiaries;
  })();

  filteredSubsidiaries.sort((a, b) => a.id - b.id);

  res.status(200).json(
    filteredSubsidiaries.slice(offset, offset + limit).map((item) => {
      return {
        ...item,
        townName:
          data.towns.find((town) => item.townId === town.id)?.name ?? null,
      };
    })
  );
}
