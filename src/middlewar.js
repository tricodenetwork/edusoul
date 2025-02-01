import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  const isAdmin = false;
  const all = await req.cookies.getAll();
  console.log(all);

  // if (!user) {
  //   return NextResponse.redirect(new URL("/auth/signin", req.nextUrl.origin));
  // }

  try {
    if (pathname.startsWith("/dashboard") && isAdmin) {
      return NextResponse.redirect(new URL("/admin", req.nextUrl.origin));
    }

    if (pathname.startsWith("/admin") && !isAdmin) {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/signin", req.nextUrl.origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"], // Apply only to these routes
};
