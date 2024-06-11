// import SettleometerForm from "@/app/(components)/SettleometerForm";
// import SuspendedSolidsTestForm from "@/app/(components)/SuspendedSolidsTestForm";
// import TotalSolidsTestForm from "@/app/(components)/TotalSolidsTestForm";

// const getReportById = async (id) => {
//   const res = await fetch(`http://localhost:3000/api/reports/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to get report.");
//   }

//   return res.json();
// };

// const ReportPage = async ({ params }) => {
//   const EDITMODE = params.id === "new" ? false : true;

//   let updateReportData = {};

//   if (EDITMODE) {
//     updateReportData = await getReportById(params.id);
//     console.log(updateReportData);
//   }
//   return (
//     <div>
//       <SettleometerForm />
//       <TotalSolidsTestForm />
//       <SuspendedSolidsTestForm />
//     </div>
//   );
// };

// export default ReportPage;
