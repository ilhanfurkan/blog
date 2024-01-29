import { NextApiRequest, NextApiResponse } from 'next';
import { sendMail } from './utils/sendmail';
import { UserMailConfigTypes } from '@/types/types';

export default function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log('selamlar');

  if (req.method === 'POST') {
    try {
      const userMailConfig: UserMailConfigTypes = {
        username: 'furkanilhanresmi@gmail.com',
        password: 'ijjvzpyotlftpmgw',
        port: 587,
        host: 'smtp.gmail.com',
      };
      const { to, htmlFile, mailRequest } = req.body;

      console.log('-----------------------------------asd');

      sendMail(to, htmlFile, mailRequest, userMailConfig);

      console.log('-----------------------------------dsa');

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error in sending feedback:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
