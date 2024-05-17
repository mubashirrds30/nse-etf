import { NextResponse } from "next/server"
export default function returnSuccessResponse(code, message, data = {}, success = true) {
    return NextResponse.json({
        message, data, codeStatus: code, success
    }, { status: code })
}