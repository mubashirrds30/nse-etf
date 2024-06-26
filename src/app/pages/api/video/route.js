import { deleteData, getData, postData, updateData } from "../../../../../helper/common_db_method/db_functions";
import db, { tblVideonPodcast } from "../../../../../helper/connection/dbconnect";

import returnErrorResponse from "../../../../../helper/functional-helper/error_response";
import returnSuccessResponse from "../../../../../helper/functional-helper/sucess_response";

export const GET = async (req, res, next) => {
    try {
        const searchParams = req.nextUrl.searchParams;
        let queryOption = {
            type: 0,
        };
        if (searchParams.size > 0) {
            const query = searchParams.get('id');
            console.log('id pass', searchParams);
            queryOption.id = parseInt(query);
        }
        let video = await getData(db.tblVideonPodcast, queryOption)
        return returnSuccessResponse(200, "Successfully retrieved podcast", video);
    } catch (error) {
        return returnErrorResponse(500, error?.message, "Error in get podcast", false);
    }
}

export async function POST(req, res, next) {
    try {
        // let podcast = await db.tblpodcasts.findMany();
        const res = await req.json()
        console.log(res, 'body check');
        // let d = await postData(db.tblVideonPodcast, res);
        await db.tblVideonPodcast.create({ data: { ...res, type: 0 } });
        return returnSuccessResponse(200, "Successfully Added podcast");
    } catch (error) {
        return returnErrorResponse(500, error?.message, "Error in posting podcast", false);
    }
}


export async function PUT(req, res) {
    try {
        const res = await req.json();
        await db.tblVideonPodcast.update({ where: { id: res.id }, data: res })
        // await updateData(db.tblVideonPodcast, res, );
        return returnSuccessResponse(200, "Successfully Updated video");
    } catch (error) {
        return returnErrorResponse(500, error?.meta?.cause, "Error in update video", false);
    }
}

export async function DELETE(req, res) {
    try {
        const searchParams = req.nextUrl.searchParams;
        let queryOption = {
            type: 0
        };
        if (!searchParams.size > 0) {
            return returnErrorResponse(400, 'Id required', "Invalid Request")
        }
        const query = searchParams.get('id');
        console.log('id pass', searchParams);
        queryOption.id = parseInt(query);
        await db.tblVideonPodcast.delete({ where: queryOption });
        // await deleteData(tblpodcast, queryOption);
        return returnSuccessResponse(200, "Successfully Deleted video");

    } catch (error) {
        return returnErrorResponse(400, error?.meta?.cause, "Error deleting")
    }
}
