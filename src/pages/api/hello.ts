// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type DataProps = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataProps>,
) {
  res.status(200).json({ name: 'John Doe' });
}
