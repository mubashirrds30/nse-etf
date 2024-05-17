import jwt from 'jsonwebtoken'
import getConfig from 'next/config';
import CustomError from '../error/error';
const { jwtconfig } = getConfig();
function jwtValidate(token) {
    try {
        return jwt.verify(token, jwtconfig.TOKEN_PRIVATE);
    } catch (error) {
        throw new CustomError(403, error?.message == 'invalid signature' ? 'Invalid Token' : error?.message,);
    }
}
export default function jwtCreate(data) {
    return jwt.sign(data, jwtconfig.TOKEN_PRIVATE, { expiresIn: '1d' });
}
export default function jwtMiddleware(req, res, next) {
    let token;
    const authHeader = req.headers.authorization;
    if (req.url.includes('/auth')) {
        return next()
    }
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
    }
    if (!token) {
        return res.status(401).send({ message: "Please Provide Token", error: "Token not Found", codeStatus: 401 });
    }
    try {
        console.log('hit before head');
        const head = jwtValidate(token, process.env.ACCESS_TOKEN_SECRET);
        // console.log(head, 'head check');
        req.user = head;
        if ((head.id || head.email) && head.status) {
            next();
        }
        else {
            return next(customErrorClass.InvalidToken("Token is invalid"));
        }
    } catch (error) {
        return next(customErrorClass.Unauthorized(error?.message ? error?.message : "Unauthorized"));
    }
}


