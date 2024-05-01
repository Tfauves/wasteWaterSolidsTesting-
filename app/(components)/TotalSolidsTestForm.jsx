"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TotalSolidsTestForm = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedFormData = { ...tssFormData };

    if (name.startsWith("data_")) {
      const fieldName = name.slice(5); // Remove "data_" prefix
      updatedFormData = {
        ...updatedFormData,
        testData: {
          ...updatedFormData.testData,
          [fieldName]: value,
        },
      };

      // Perform calculations based on updated fields
      if (
        fieldName === "A_dryFilterWithSolids" ||
        fieldName === "B_cleanFilter"
      ) {
        const otherFieldName =
          fieldName === "A_dryFilterWithSolids"
            ? "B_cleanFilter"
            : "A_dryFilterWithSolids";
        const otherValue =
          parseFloat(updatedFormData.testData[otherFieldName]) || 0;
        const currentValue = parseFloat(value) || 0;
        const difference = currentValue - otherValue;
        updatedFormData.testData = {
          ...updatedFormData.testData,
          C_drySolids: difference.toString(),
        };
      } else if (
        fieldName === "C_drySolids" ||
        fieldName === "D_volOfSample" ||
        fieldName === "H_weightOfVolatileSolids"
      ) {
        const C = parseFloat(updatedFormData.testData["C_drySolids"]) || 0;
        const D = parseFloat(updatedFormData.testData["D_volOfSample"]) || 0;
        const H =
          parseFloat(updatedFormData.testData["H_weightOfVolatileSolids"]) || 0;
        updatedFormData.testData = {
          ...updatedFormData.testData,
          E_tssOfSample: ((C / D) * 1000000).toString(),
          I_volatileSolidsVSS: ((H / D) * 1000000).toString(),
          J_percentVolatileSolids: (
            (((H / D) * 1000000) / ((C / D) * 1000000)) *
            100
          ).toString(),
        };
      } else if (fieldName === "G_weightOfAsh") {
        const C = parseFloat(updatedFormData.testData["C_drySolids"]) || 0;
        const G = parseFloat(value) || 0;
        updatedFormData.testData = {
          ...updatedFormData.testData,
          G_weightOfAsh: (C - G).toString(),
        };
      }
    } else if (
      name === "testNumber" ||
      name === "dishNumber" ||
      name === "notes"
    ) {
      updatedFormData = {
        ...updatedFormData,
        [name]: value,
      };
    }

    // Update state
    setTssFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const res = await fetch("/api/TotalSolidsTest", {
      method: "POST",
      body: JSON.stringify({ tssFormData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to create Report!");
    }

    router.refresh();
    router.push("/");
  };

  const startingReportData = {
    testNumber: "",
    dishNumber: "",
    testData: {
      A_dryFilterWithSolids: "",
      B_cleanFilter: "",
      // A-B
      C_drySolids: "",
      D_volOfSample: "",
      //C/D * 1,000,000
      E_tssOfSample: "",
      F_filterAndAsh: "",
      //F-B
      G_weightOfAsh: "",
      //C-G
      H_weightOfVolatileSolids: "",
      //H/D * 1,000,000
      I_volatileSolidsVSS: "",
      //I/E *100
      J_percentVolatileSolids: "",
    },
    notes: "",
  };

  const [tssFormData, setTssFormData] = useState(startingReportData);

  return (
    <div>
      <div className="flex mt-10 justify-center">
        <h2>Total Solids Test</h2>
      </div>
      <div className="flex justify-center">
        <form
          className="flex flex-col gap-3 w-1/2"
          method="post"
          onSubmit={handleSubmit}
        >
          <h4>Create Your Report</h4>
          <label>Test Number</label>
          <input
            id="testNumber"
            name="testNumber"
            type="text"
            onChange={handleChange}
            value={tssFormData.testNumber}
          />
          <label>Dish Number(s)</label>
          <input
            id="dishNumber"
            name="dishNumber"
            type="text"
            onChange={handleChange}
            value={tssFormData.dishNumber}
          />
          <label>Notes</label>
          <textarea
            id="notes"
            name="notes"
            onChange={handleChange}
            value={tssFormData.notes}
            rows="5"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(tssFormData.testData).map(
              ([timeKey, timeValue]) => (
                <div className="flex flex-col" key={timeKey}>
                  <label>{timeKey}</label>
                  <input
                    id={timeKey}
                    name={`data_${timeKey}`}
                    type="text"
                    onChange={handleChange}
                    value={timeValue}
                    className="border border-gray-300 rounded-md py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
                  />
                </div>
              )
            )}
          </div>

          <input type="submit" className="btn max-w-xs" value="Create Report" />
        </form>
      </div>
    </div>
  );
};

export default TotalSolidsTestForm;
