"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SolidsReportForm = ({ report }) => {
  const router = useRouter();

  const EDITMODE = report._id === "new" ? false : true;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name.startsWith("timeMarks_")) {
      const timeKey = name.split("_")[1];
      setFormData((prevState) => ({
        ...prevState,
        timeMarks: {
          ...prevState.timeMarks,
          [timeKey]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EDITMODE) {
      console.log("submitted");
      const res = await fetch(`/api/SolidsReport/${report._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to update Report!");
      }
    } else {
      console.log("submitted");
      const res = await fetch("/api/SolidsReport", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to create Report!");
      }
    }

    router.refresh();
    router.push("/");
  };

  const startingReportData = {
    operatorID: "",
    description: "",
    category: "",
    timeMarks: {
      five: "",
      ten: "",
      fifteen: "",
      twenty: "",
      twentyFive: "",
      thirty: "",
    },
  };

  if (EDITMODE) {
    startingReportData["operatorID"] = report.operatorID;
    startingReportData["description"] = report.description;
    startingReportData["category"] = report.category;
    startingReportData["timeMarks"] = report.timeMarks;
  }

  const [formData, setFormData] = useState(startingReportData);

  return (
    <div>
      <div className="flex mt-10 justify-center">
        <h2>Solids Testing Report</h2>
      </div>
      <div className="flex justify-center">
        <form
          className="flex flex-col gap-3 w-1/2"
          method="post"
          onSubmit={handleSubmit}
        >
          <h4>{EDITMODE ? "Updated Report" : "Create Report"}</h4>
          <label>Operator Id:</label>
          <input
            id="operatorID"
            name="operatorID"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.operatorID}
          />
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            required={true}
            value={formData.description}
            rows="5"
          />
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select an option
            </option>
            <option value="routine monitor">Routine Monitor</option>
            <option value="suspected problem">Suspected Problem</option>
            <option value="test">Test</option>
          </select>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(formData.timeMarks).map(([timeKey, timeValue]) => (
              <div className="flex flex-col" key={timeKey}>
                <label>{timeKey}</label>
                <input
                  id={timeKey}
                  name={`timeMarks_${timeKey}`}
                  type="text"
                  onChange={handleChange}
                  value={timeValue}
                  className="border border-gray-300 rounded-md py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
                />
              </div>
            ))}
          </div>
          <input
            type="submit"
            className="btn max-w-xs"
            value={EDITMODE ? "Updated Report" : "Create Report"}
          />
        </form>
      </div>
    </div>
  );
};

export default SolidsReportForm;
