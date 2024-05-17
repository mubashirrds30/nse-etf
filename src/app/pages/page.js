"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { createTheme } from "@mui/material/styles";
// import { ThemeProvider } from "@emotion/react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Pencil } from 'lucide-react';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { orderBy } from "@progress/kendo-data-query";
// import products from "../../../src/product.json";
import filterTableData from "../pages/video/tableData.json";

const columns = [
  { field: "sn", displayName: "Sr. No." },
  { field: "name", displayName: "Name" },
  { field: "fy", displayName: "Financial Year" },
  { field: "date", displayName: "Date" },
  { field: "file", displayName: "File" },
  { field: "action", displayName: "Action" },
];

const theme = createTheme({
  spacing: (factor) => `${0.5 * factor}rem`,
});
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]


const initialSort = [
  {
    field: "FundName",
    dir: "asc",
  },
];
const initialDataState = {
  skip: 0,
  take: 10,
};

export default function Page() {
  const [sort, setSort] = React.useState(initialSort);
  const [page, setPage] = React.useState(initialDataState);
  const [pageSizeValue, setPageSizeValue] = React.useState();
  const pageChange = (event) => {
    const targetEvent = event.targetEvent;
    const take =
      targetEvent.value === "All" ? filterTableData.length : event.page.take;
    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    setPage({
      ...event.page,
      take,
    });
  };
  return (
    // <Table>
    //   <TableCaption>A list of your recent invoices.</TableCaption>
    //   <TableHeader>
    //     <TableRow>
    //       <TableHead className="w-[100px]">Invoice</TableHead>
    //       <TableHead>Status</TableHead>
    //       <TableHead>Method</TableHead>
    //       <TableHead>Amount</TableHead>
    //       <TableHead>Action</TableHead>
    //     </TableRow>
    //   </TableHeader>
    //   <TableBody>
    //     {invoices.map((invoice) => (
    //       <TableRow key={invoice.invoice}>
    //         <TableCell className="font-medium">{invoice.invoice}</TableCell>
    //         <TableCell>{invoice.paymentStatus}</TableCell>
    //         <TableCell>{invoice.paymentMethod}</TableCell>
    //         <TableCell>{invoice.totalAmount}</TableCell>
    //         <TableCell>
    //           <Button variant="outline" size="icon">
    //             <Pencil className="h-4 w-4" />
    //           </Button>
    //         </TableCell>
    //       </TableRow>
    //     ))}
    //   </TableBody>
    //   <TableFooter>
    //     <TableRow>
    //       <TableCell colSpan={3}>Total</TableCell>
    //       <TableCell >$2,500.00</TableCell>
    //     </TableRow>
    //   </TableFooter>
    // </Table>
    <div className="bs-screener-filter">
      <div className="table-wrap">
        <div className="cta">
          <a href="" className="btn btn-filled"> Add New</a>
        </div>
        <Grid
          style={{
            height: "100%",
          }}
          data={orderBy(
            filterTableData.slice(page.skip, page.take + page.skip),
            sort
          )}
          sortable={true}
          sort={sort}
          onSortChange={(e) => {
            setSort(e.sort);
          }}
          skip={page.skip}
          take={page.take}
          total={filterTableData.length}
          pageable={{
            buttonCount: 4,
            pageSizes: [20, 30, 40, 50, "All"],
            pageSizeValue: pageSizeValue,
          }}
          onPageChange={pageChange}
          className="bs-table typ-cms"
        >
          {columns.map((item, index) => (
            <GridColumn
              key={index}
              field={item.field}
              title={item.displayName}
              filterable={false}
              sortable={true}
              locked={index === 0}
              cell={(props) => {
                if (item.field === "action") {
                  return (
                    <td>
                      <Button className="btn btn-primary" onClick={() => handleEdit(props.dataItem)}>
                        Edit
                      </Button>
                      <Button className="btn btn-filled" onClick={() => handleDelete(props.dataItem)}>
                        Delete
                      </Button>
                    </td>
                  );
                }
                return <td>{props.dataItem[item.field]}</td>;
              }}
            />
          ))}
        </Grid>
      </div >
    </div>
  );
}
