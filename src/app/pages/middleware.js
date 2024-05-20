import { NextResponse } from "next/server";

export default function middleware(req, res) {
    console.log(req, 'req check');
    return NextResponse.next();
}

export const config = {
    matcher: ['/report', '/article']
}