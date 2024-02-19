import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    const jwt = request.cookies.get("tokenTello");

    if (!jwt) return NextResponse.redirect(new URL("/auth/login", request.url));

    try {
        const { payload } = await jwtVerify(
            jwt.value,
            new TextEncoder().encode(process.env.TOKEN_SECRET)
        );
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
