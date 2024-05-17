import { Button } from "@/components/ui/button";
import db from "../../../../helper/connection/dbconnect";
async function getReport() {
    try {
        console.log(db.tblReport, 'check db');
        let report = await db.tblReport.findMany()
        return report;
    } catch (error) {
        return error;
    }
}
export default async function Report() {
    // let data = await getReport();
    // console.log(data, 'report data');
    return (
        <>
            {/* <h1>{data}</h1> */}
            <Button variant="outlined">Report Btn</Button>
        </>
    )
}