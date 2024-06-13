"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SolidsReportForm = ({ report }) => {
  const router = useRouter();

  const EDITMODE = report._id === "new" ? false : true;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
  };

  if (EDITMODE) {
    startingReportData["operatorID"] = report.operatorID;
    startingReportData["description"] = report.description;
    startingReportData["category"] = report.category;
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
