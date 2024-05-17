import { join } from "path";
import returnErrorResponse from "../../../../../helper/functional-helper/error_response"
import returnSuccessResponse from "../../../../../helper/functional-helper/sucess_response"
import fs from 'fs';


export const config = { api: { bodyParser: false } }


export async function POST(req, res) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');
        if (!file) {
            return returnErrorResponse(400, 'No file uploaded', 'File not Found');
        }
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        console.log(file);
        const uploadDir = join(process.cwd(), 'public/', file.name);
        if (file.size > 5 * 1024 * 1024) {
            return returnErrorResponse(400, 'File size exceeds 5MB limit', 'File size too large');
        }
        // const uploadDir = join('/', 'tmp', file.name);
        await fs.writeFile(uploadDir, buffer, err => {
            console.log(err, 'err');
        });
        return returnSuccessResponse(201, 'Upload Document Successfully', uploadDir)
    } catch (error) {
        return returnErrorResponse(400, error?.message, "Error while uploading")
    }
}


export async function DELETE(req, res) {
    try {
        const searchParams = req.nextUrl.searchParams;
        let queryOption = {};
        if (!searchParams.size > 0) {
            return returnErrorResponse(400, 'Filename required', "Please Provide Filename")
        }
        const query = searchParams.get('filename');
        const uploadDir = join(process.cwd(), 'public/', `${query}.pdf`);
        await fs.unlink(uploadDir, err => {
            console.log(err, 'err');
        })
        return returnSuccessResponse(200, 'Successfully deleted ')
    } catch (error) {
        return returnErrorResponse(400, 'invalid path', "Path not found")
    }
}
// export const config = {api: {bodyParser: false}}