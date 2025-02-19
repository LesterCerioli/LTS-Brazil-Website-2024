import { NextRequest, NextResponse } from "next/server";

// Allow requests only from the frontend
const ALLOWED_ORIGIN = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://lts-brazil-website-2024.vercel.app/";

export function middleware(req: NextRequest) {
    const origin = req.headers.get("origin");

    if (!origin || origin !== ALLOWED_ORIGIN) {
        return new NextResponse(
            JSON.stringify({ error: "Unauthorized access" }),
            { status: 403, headers: { "Content-Type": "application/json" } }
        );
    }

    return NextResponse.next();
}

// Apply the middleware only to API routes
export const config = {
    matcher: "/api/:path*",
};
