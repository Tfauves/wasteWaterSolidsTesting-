"use client";

import React, { useState, useEffect } from "react";
import ReportCard from "./(components)/ReportCard";
import RotatingSpinner from "./(components)/Spinner";

const getReports = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/SolidsReport", {
      cache: "no-store",
    });

    console.log(res.status);
    console.log(res.headers);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Failed to get Reports:", error);
    return { Report: [] };
  }
};

const Dashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const data = await getReports();
      if (data && data.Report) {
        setReports(data.Report);
        console.log("Reports state updated:", data.Report);
      } else {
        console.error("No reports data found in the response");
      }
    };

    fetchReports();
  }, []);

  useEffect(() => {
    console.log("Reports:", reports);
  }, [reports]);

  const uniqueCategories = [
    ...new Set(reports?.map(({ category }) => category)),
  ];
  console.log("Unique categories:", uniqueCategories);

  return (
    <div className="p-5">
      <div>
        {reports.length > 0 ? (
          uniqueCategories.map((uniqueCategory) => (
            <div key={uniqueCategory} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {reports
                  .filter((report) => report.category === uniqueCategory)
                  .map((filteredReport) => (
                    <ReportCard
                      id={filteredReport._id}
                      key={filteredReport._id}
                      report={filteredReport}
                    />
                  ))}
              </div>
            </div>
          ))
        ) : (
          <span className="inline-flex items-center">
            Loading... <RotatingSpinner />
          </span>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
