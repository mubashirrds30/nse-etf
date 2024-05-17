import { deleteData, getData, postData, updateData } from "../../../../../helper/common_db_method/db_functions";
import db from "../../../../../helper/connection/dbconnect";
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
        let article = await getData(db.tblArticle, queryOption)
        // db.tblArticle.findMany({

        // });
        return returnSuccessResponse(200, "Successfully retrieved article", article);
    } catch (error) {
        return returnErrorResponse(500, error?.message, "Error in get article", false);
    }
}

export async function POST(req, res, next) {
    try {
        // let article = await db.tblArticles.findMany();
        const res = await req.json()
        console.log(res, 'body check');
        // await postData(db.tblArticle, res);
        await db.tblArticle.create({ data: res });
        return returnSuccessResponse(200, "Successfully Added article");
    } catch (error) {
        return returnErrorResponse(500, error?.message, "Error in post article", false);
    }
}


export async function PUT(req, res) {
    try {
        const res = await req.json();
        // await updateData(db.tblArticle, res,);
        await db.tblArticle.update({ where: { id: res.id }, data: res });
        return returnSuccessResponse(200, "Successfully Updated article");
    } catch (error) {
        return returnErrorResponse(500, error?.meta?.cause, "Error in update article", false);
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
        await db.tblArticle.delete({ where: queryOption });
        // await deleteData(db.tblArticle, queryOption);
        return returnSuccessResponse(200, "Successfully Deleted article");

    } catch (error) {
        return returnErrorResponse(400, error?.meta?.cause, "Error deleting")
    }
}
