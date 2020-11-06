import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (result) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns as table Header
  const tableColumn = [
    [
      "Project Name",
      "Project Description",
      "Client",
      "Contractor",
      "X-Max",
      "X-Min",
      "Y-Max",
      "Y-Min",
      "Z-Max",
      "Z-Min",
    ],
  ];

  // define array of rows for table data
  const tableRows = [
    [
      result.pName,
      result.pDescription,
      result.client,
      result.contractor,
      result.maxX,
      result.minX,
      result.maxY,
      result.minY,
      result.maxZ,
      result.minZ,
    ],
  ];

  // startY is basically margin-top
  doc.autoTable({
    theme: "grid",
    startY: 20,
    styles: { fontSize: 8 },
    head: tableColumn,
    body: tableRows,
  });
  const date = Date().split(" ");
  const dateStr = `${date[2]}_${date[1]}_${date[3]}_${date[4]}`;
  doc.text("Data Table", 14, 15);
  doc.save(`abc_engine_result_${dateStr}.pdf`);
};

export default generatePDF;
