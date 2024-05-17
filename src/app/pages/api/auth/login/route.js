import { tblUser } from "../../../../../../helper/connection/dbconnect";
import returnErrorResponse from "../../../../../../helper/functional-helper/error_response";
import returnSuccessResponse from "../../../../../../helper/functional-helper/sucess_response";
import { jwtCreate } from "../../../../../../helper/jwt-helper/jwt-helper";

export async function POST(req, res) {
    try {
        let body = await req.json();
        let data = await tblUser.findMany({
            where: {
                email: body.email
            }
        })
        if (!data[0]) return returnErrorResponse(404, "user not found", "Not Found");
        console.log(data);
        console.log('enter in handler');
        delete data[0].password;
        let token = jwtCreate(data[0])
        return returnSuccessResponse(200, 'Login Successfully', {
            token: token,
            id: data[0].userid,
            email: body.email
        })
    } catch (error) {
        return returnErrorResponse(404, error?.message, "Error in Operation", false)
    }

    // res.status(200).json({ message: 'Hello from the users API endpoint!' });
}