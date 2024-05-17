import { NextResponse } from "next/server"
export default function returnErrorResponse(code, error = "Server Error", message = "", success = false) {
    return NextResponse.json({
        error, message, codeStatus: code, success
    }, { status: code })
}