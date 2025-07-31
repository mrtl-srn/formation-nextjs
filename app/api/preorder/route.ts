import { dbConnect } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest,) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email');

  const successUrl = new URL('/preorder', request.url);
  successUrl.searchParams.set('success', "true");

  console.log('email:', email);

  const db = await dbConnect();

  db.increment('preorders');

  return NextResponse.redirect(successUrl);
}