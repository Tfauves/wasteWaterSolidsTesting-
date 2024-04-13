import React from "react";
import ReportCard from "./(components)/ReportCard";

const getReports = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Reports", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get reports");
  }
};

const Dashboard = async () => {
  const { reports } = await getReports();

  const uniqueCategories = [
    ...new Set(reports?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <div>
          {reports &&
            uniqueCategories?.map((uniqueCategory, categoryIndex) => (
              <div key={categoryIndex} className="mb-4">
                <h2>{uniqueCategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {reports
                    .filter((report) => report.category === uniqueCategory)
                    .map((filteredReport, _index) => (
                      <ReportCard
                        id={_index}
                        key={_index}
                        report={filteredReport}
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
