import { NextResponse } from 'next/server';

/**
 * Get list of courses
 * @returns 
 */
export async function GET() { // eslint-disable-line
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'oauth 13887e04bf1d30ed95885c74ee24598e',
  //     },
  //   })
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return NextResponse.json({ data });
}
