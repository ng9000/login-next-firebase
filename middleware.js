import { NextResponse } from "next/server";

export function middleware(request) {
    const auth = request.cookies.get("auth");
    const url = request.nextUrl.clone();
    url.pathname = "/sign-in";

    if (!auth) {
        if (request.nextUrl.pathname !== "/sign-in")
            return NextResponse.redirect(url);
        //return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/",
};
