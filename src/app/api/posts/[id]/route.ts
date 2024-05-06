import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headerList = headers();
  const cookiesList = cookies();
  const cookieOne = cookiesList.get('Cookie_1')?.value;

  const type = headerList.get('Content-Type');

  return NextResponse.json({ id, type, cookieOne });
}
