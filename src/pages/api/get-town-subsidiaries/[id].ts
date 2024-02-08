import data from '@/mock/data';
import type { NextApiRequest, NextApiResponse } from 'next'
type ResponseData =
| {
  message: string
}
| typeof data.subsidiaries
 
export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return
  }
  const { id } = req.query;
  const town = data.towns.find((item) => item.id.toString() === id);
  if (!town) {
    res.status(400).json({ message: 'Такого города нет в базе данных'})
    return;
  }
  res.status(200).json(data.subsidiaries.filter((item) => item.townId === town.id));
}
