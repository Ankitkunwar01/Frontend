import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Get role from cookie (set during login)
  const role = request.cookies.get('role')?.value;

  // Protect routes
  if (pathname.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (pathname.startsWith('/moderator') && role !== 'moderator') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (pathname.startsWith('/hatchery') && role !== 'hatchery_member') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow access
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/moderator/:path*', '/hatchery/:path*'],
};