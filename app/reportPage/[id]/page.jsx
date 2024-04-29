import SettleometerForm from "@/app/(components)/SettleometerForm";
import TotalSolidsTestForm from "@/app/(components)/TotalSolidsTestForm";
import TotalSuspendedSolidsTestForm from "@/app/(components)/TotalSuspendedSolidsTestForm";

const getReportById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/reports/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get report.");
  }

  return res.json();
};

const ReportPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  let updateReportData = {};

  if (EDITMODE) {
    updateReportData = await getReportById(params.id);
    console.log(updateReportData);
  }
  return (
    <div>
      <SettleometerForm />

      <TotalSolidsTestForm />
    </div>
  );
};

export default ReportPage;
