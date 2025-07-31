import { dbConnect } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email');
  console.log('email:', email);

  const successUrl = new URL(request.headers.get('referer') || '/products');
  successUrl.searchParams.set('success', "true");

  const db = await dbConnect();

  db.increment('preorders');

  return NextResponse.redirect(successUrl);
}