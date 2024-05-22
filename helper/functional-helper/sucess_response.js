import { NextResponse } from "next/server"
export default function returnSuccessResponse(code, message, data = {}, success = true) {
    let res = NextResponse.json({
        message, data, codeStatus: code, success
    }, { status: code }
    )
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res
}
