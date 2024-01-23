import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportToExcel = (user: any) => {
  const { purchases, ...userData } = user;

  const workbook = XLSX.utils.book_new();
  const userSheet = XLSX.utils.json_to_sheet([userData], {
    header: Object.keys(userData),
  });

  if (purchases && purchases.length > 0) {
    const purchasesData = purchases.map(
      (purchase: { [x: string]: any; course: any }) => {
        const { course, ...purchaseData } = purchase;
        return {
          ...purchaseData,
          ...course,
        };
      }
    );

    const purchasesSheet = XLSX.utils.json_to_sheet(purchasesData, {
      header: Object.keys(purchasesData[0]),
    });
    XLSX.utils.book_append_sheet(workbook, purchasesSheet, "Purchase History");
  }

  XLSX.utils.book_append_sheet(workbook, userSheet, "User");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const fileName = "user_data.xlsx";
  saveAs(blob, fileName);
};
