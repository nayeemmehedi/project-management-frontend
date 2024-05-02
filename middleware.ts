// app/middleware.js
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookieValue = request.cookies.get('authToken')?.value; // Replace 'cookieName' with your actual cookie name

  if (!cookieValue) {
    // If the cookie is not present, redirect to the login page
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    return NextResponse.redirect(loginUrl);
  }

  // If the cookie is present, let the request proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/mainPoint', '/employee'],
};