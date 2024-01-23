import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { UserProps } from "../page";

export const exportToExcel = (users: UserProps[]) => {
  const workbook = XLSX.utils.book_new();
  const userSheet = XLSX.utils.json_to_sheet(users, {
    header: Object.keys(users[0]),
  });

  XLSX.utils.book_append_sheet(workbook, userSheet, "Users");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const fileName = "users_data.xlsx";
  saveAs(blob, fileName);
};
