import { NextResponse } from 'next/server';

/**
 * Get access token for courses
 * @returns 
 */
export async function POST(request) { // eslint-disable-line
  const req = await request.text();
  const res = await fetch('https://captivateprime.adobe.com/oauth/token', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    //   'API-Key': process.env.DATA_API_KEY,
    // },
    body: JSON.stringify({
      client_id: 'e78d9e6f-f6f5-4e71-95b0-7a7052b7785e',
      client_secret: '0468e94b-bd07-42be-9b67-6a5246a540c6',
      code: '0d7f75039ebb5cf93734ec6e154df842',
    }),
  });
  const data = await res.json();

  return NextResponse.json(data);
}
