// import { NextApiRequest, NextApiResponse } from 'next';
import { sendMail } from '../utils/sendmail';
import { UserMailConfigTypes } from '@/types/types';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  const userMailConfig: UserMailConfigTypes = {
    username: 'furkanilhanresmi@gmail.com',
    password: 'lojlpkfdnuoadnsn',
    port: 587,
    host: 'smtp.gmail.com',
  };

  await sendMail(data?.to, data?.htmlFile, data?.mailRequest, userMailConfig);

  return NextResponse.json({ message: 'Success' }, { status: 200 });
}
