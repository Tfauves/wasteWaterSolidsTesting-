import SolidsReportForm from "@/app/(components)/SolidsReportForm";
import React from "react";

const getReportById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/SolidsReport/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get Reports.");
  }

  return res.json();
};

const NewReportPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  let updateReportData = {};

  if (EDITMODE) {
    updateReportData = await getReportById(params.id);
    updateReportData = updateReportData.foundReport;
    console.log(updateReportData);
  } else {
    updateReportData = {
      _id: "new",
    };
  }

  return (
    <div>
      <SolidsReportForm report={updateReportData} />
    </div>
  );
};

export default NewReportPage;
