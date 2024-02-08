import data from "@/mock/data";
import type { NextApiRequest, NextApiResponse } from "next";
type ResponseData = Array<(typeof data.jobs)[number]>;

const testJobs = data.jobs
  .map((job) => {
    const count = 20;
    return Array(count)
      .fill(job)
      .map((item: typeof job, i) => {
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

  const filteredJobs = (() => {
    if (search && !Array.isArray(search)) {
      return testJobs.filter(
        (item) =>
          item.name.toUpperCase().includes(search.toUpperCase()) ||
          item.stage.toUpperCase().includes(search.toUpperCase()) ||
          item.tarrif.toString().toUpperCase().includes(search.toUpperCase()) ||
          item.period.toString().toUpperCase().includes(search.toUpperCase())
      );
    }
    return testJobs;
  })();

  filteredJobs.sort((a, b) => a.id - b.id);

  res.status(200).json(filteredJobs.slice(offset, offset + limit));
}
