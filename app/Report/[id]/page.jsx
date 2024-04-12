import SettleometerForm from "@/app/(components)/SettleometerForm";

const getReportById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Reports/${id}`, {
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
    updateReportData = await getTicketById(params.id);
    console.log(updateReportData);
  }
  return (
    <div>
      <SettleometerForm />
    </div>
  );
};

export default ReportPage;
