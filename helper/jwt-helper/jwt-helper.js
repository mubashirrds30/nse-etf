import jwt from 'jsonwebtoken'
// import getConfig from 'next/config';
import CustomError from '../error/error';
import returnErrorResponse from '../functional-helper/error_response';
import { NextResponse } from 'next/server';
// import nextConfig from '../../next.config.mjs/index.js';
// const { jwtconfig } = getConfig();
function jwtValidate(token) {
    try {
        return jwt.verify(token, process.env.TOKEN_PRIVATE);
    } catch (error) {
        return returnErrorResponse(401, error?.message, 'Token Invalid')
    }
}
export function jwtCreate(data) {
    return jwt.sign(data, process.env.TOKEN_PRIVATE, { expiresIn: '1d' });
}
export async function jwtMiddleware(token) {
    if (!token) {
        return returnErrorResponse(401, 'Token not found', 'Please provide a valid token');
    }
    try {
        console.log('hit before head');
        const head = jwtValidate(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(head, 'head check', (head.userid && head.email && head.status), 'condition check');
        // req.user = head;
        // console.log(head, 'head check');
        if (head.userid && head.email && head.status) {
            NextResponse.next();
        }
        else {
            throw new Error('Invalid Token')
        }
    } catch (error) {
        throw new Error("Unauthorized");
    }
}


