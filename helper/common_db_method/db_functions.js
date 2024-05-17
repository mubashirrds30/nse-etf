import returnErrorResponse from "../functional-helper/error_response";

export async function getData(model, query) {
    try {
        let data = await model.findMany({
            where: query || {}, orderBy: {
                id: 'desc',
            }
        })
        return data;
    } catch (error) {
        return returnErrorResponse(501, error?.message, 'Error in Getting');
    }
}

export async function updateData(model, obj, condition) {
    try {
        let updateStatus = await model.update({ where: condition, data: obj });
        console.log(updateStatus, 'updated Status');
        return updateStatus;
    } catch (error) {
        return returnErrorResponse(400, error?.message, 'Error in Updating');
    }
}
export async function deleteData(model, condition) {
    try {
        let deleteStatus = await model.delete({ where: condition });
        console.log(deleteStatus, 'updated Status');
        return deleteStatus;
    } catch (error) {
        return returnErrorResponse(400, error?.message, 'Error in Deleting');
    }
}

export async function postData(model, obj) {
    try {
        let data = await model.create({ data: obj });
        return data;
    } catch (error) {
        return returnErrorResponse(400, error?.message, 'Error in posting data');
    }
}