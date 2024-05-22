import { getData } from "../../../../../helper/common_db_method/db_functions";
import db from "../../../../../helper/connection/dbconnect";
import returnErrorResponse from "../../../../../helper/functional-helper/error_response";
import returnSuccessResponse from "../../../../../helper/functional-helper/sucess_response";

export async function GET(req, res) {
    try {
        let promiseArr = [];
        promiseArr.push(getData(db.tblArticle), getData(db.tblReport), getData(db.tblVideonPodcast, { type: 1 }), getData(db.tblVideonPodcast, { type: 0 }))

        let data = await Promise.all(promiseArr);
        // const structureData = data.map((x) => {
        //     return {
        //         article: x[0],
        //         report: x[1],
        //         podcast: x[2],
        //         video: x[3]
        //     }
        // })
        const structureData = [
            { "article": data[0] },
            { "report": data[1] },
            { "podcast": data[2] },
            { "video": data[3] },
        ];
        return returnSuccessResponse(200, "Successfull get the dashboard", structureData)
    } catch (error) {
        return returnErrorResponse(503, error?.message, "Error getting the dashboard")
    }
}