import { deleteData, getData, postData, updateData } from "../../../../../helper/common_db_method/db_functions";
import db, { tblVideonPodcast } from "../../../../../helper/connection/dbconnect";

import returnErrorResponse from "../../../../../helper/functional-helper/error_response";
import returnSuccessResponse from "../../../../../helper/functional-helper/sucess_response";
import { jwtMiddleware } from "../../../../../helper/jwt-helper/jwt-helper";

export const GET = async (req, res, next) => {
    try {
        const searchParams = req.nextUrl.searchParams;
        let queryOption = {
            type: 1,
        };
        if (searchParams.size > 0) {
            const query = searchParams.get('id');
            console.log('id pass', searchParams);
            queryOption.id = parseInt(query);
        }
        let podcast = await getData(db.tblVideonPodcast, queryOption)
        return returnSuccessResponse(200, "Successfully retrieved podcast", podcast);
    } catch (error) {
        return returnErrorResponse(500, error?.message, "Error in get podcast", false);
    }
}

export async function POST(req, res, next) {
    try {
        const authHeader = await req.headers;
        let tokenstring = authHeader.get('authorization').split(' ')[1];
        await jwtMiddleware(tokenstring);
        // let podcast = await db.tblpodcasts.findMany();
        const res = await req.json()
        console.log(res, 'body check');
        // let d = await postData(db.tblVideonPodcast, res);
        await db.tblVideonPodcast.create({ data: { ...res, type: 1 } });
        return returnSuccessResponse(200, "Successfully Added podcast");
    } catch (error) {
        return returnErrorResponse(500, error?.message, "Error in posting podcast", false);
    }
}


export async function PUT(req, res) {
    try {
        const authHeader = await req.headers;
        let tokenstring = authHeader.get('authorization').split(' ')[1];
        await jwtMiddleware(tokenstring);
        const res = await req.json();
        await db.tblVideonPodcast.update({ where: { id: res.id }, data: res })
        // await updateData(db.tblVideonPodcast, res, );
        return returnSuccessResponse(200, "Successfully Updated podcast");
    } catch (error) {
        return returnErrorResponse(500, error?.meta?.cause, "Error in update podcast", false);
    }
}

export async function DELETE(req, res) {
    try {
        const authHeader = await req.headers;
        let tokenstring = authHeader.get('authorization').split(' ')[1];
        await jwtMiddleware(tokenstring);
        const searchParams = req.nextUrl.searchParams;
        let queryOption = {
            type: 1
        };
        if (!searchParams.size > 0) {
            return returnErrorResponse(400, 'Id required', "Invalid Request")
        }
        const query = searchParams.get('id');
        console.log('id pass', searchParams);
        queryOption.id = parseInt(query);
        await db.tblVideonPodcast.delete({ where: queryOption });
        // await deleteData(tblpodcast, queryOption);
        return returnSuccessResponse(200, "Successfully Deleted podcast");

    } catch (error) {
        return returnErrorResponse(400, error?.meta?.cause, "Error deleting")
    }
}
