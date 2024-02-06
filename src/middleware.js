import { NextResponse } from "next/server"

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/my-learning') 
    || request.nextUrl.pathname.startsWith('/course-listing')) {
        const token = request.cookies.get('token')
        if (!token)
            return NextResponse.rewrite(new URL('/login', request.url))
    }
}