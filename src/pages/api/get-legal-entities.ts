import data from '@/mock/data';
import type { NextApiRequest, NextApiResponse } from 'next'
type ResponseData = typeof data.legalEntities;
 
export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return
  }
  res.status(200).json(data.legalEntities);
}
