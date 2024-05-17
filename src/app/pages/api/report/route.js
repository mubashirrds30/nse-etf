import { deleteData, getData, postData, updateData } from "../../../../../helper/common_db_method/db_functions";
import db, { tblReport } from "../../../../../helper/connection/dbconnect";
import returnErrorResponse from "../../../../../helper/functional-helper/error_response";
import returnSuccessResponse from "../../../../../helper/functional-helper/sucess_response";

export const GET = async (req, res, next) => {
    try {
        const searchParams = req.nextUrl.searchParams;
        let queryOption = {};
        if (searchParams.size > 0) {
            const query = searchParams.get('id');
            console.log('id pass', searchParams);
            queryOption.id = parseInt(query);
        }
        let report = await getData(db.tblReport, queryOption)
        // db.tblReport.findMany({

        // });
        return returnSuccessResponse(200, "Successfully retrieved report", report);
    } catch (error) {
        return returnErrorResponse(500, error?.message, "Error in get report", false);
    }
}

export async function POST(req, res, next) {
    try {
        // let report = await db.tblReports.findMany();
        const res = await req.json()
        console.log(res, 'body check');
        // await postData(db.tblReport, res);
        await db.tblReport.create({ data: res });
        return returnSuccessResponse(200, "Successfully Added report");
    } catch (error) {
        return returnErrorResponse(500, error?.message, "Error in post report", false);
    }
}


export async function PUT(req, res) {
    try {
        const res = await req.json();
        // await updateData(tblReport, res, { id: res.id });
        await tblReport.update({ where: { id: res.id }, data: res })
        return returnSuccessResponse(200, "Successfully Updated report");
    } catch (error) {
        return returnErrorResponse(500, error?.meta?.cause, "Error in update report", false);
    }
}

export async function DELETE(req, res) {
    try {
        const searchParams = req.nextUrl.searchParams;
        let queryOption = {};
        if (!searchParams.size > 0) {
            return returnErrorResponse(400, 'Id required', "Invalid Request")
        }
        const query = searchParams.get('id');
        console.log('id pass', searchParams);
        queryOption.id = parseInt(query);
        await tblReport.delete({ where: queryOption });
        // await deleteData(tblReport, queryOption);
        return returnSuccessResponse(200, "Successfully Deleted report");

    } catch (error) {
        return returnErrorResponse(400, error?.meta?.cause, "Error deleting")
    }
}
