import { NextResponse } from "next/server";

export default function middleware(req) {
    console.log(req.method, 'req method');
    console.log(req.url, 'req url');

    const res = NextResponse.next()
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.headers.set("Access-Control-Allow-Credentials", "*");
    res.headers.set("Access-Control-Expose-Headers", "");
    res.headers.set("Access-Control-Max-Age", "86400");
    return NextResponse.next();
}

// export const config = {
//     matcher: ['/report', '/article']
// }