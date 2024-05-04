"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SuspendedSolidsTestForm = () => {
  const router = useRouter();

  const handleChange = (e, section, field) => {
    const { name, value } = e.target;

    if (name === "testNumber") {
      setTestData((prevState) => ({
        ...prevState,
        testNumber: value,
      }));
    } else {
      setTestData((prevState) => ({
        ...prevState,
        testData: {
          ...prevState.testData,
          [section]: {
            ...prevState.testData[section],
            [field]: value,
          },
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const res = await fetch("/api/SuspendedSolidsTest", {
      method: "POST",
      body: JSON.stringify({ testData }),
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
      A_weightDryFilterAndSolids: {
        mixedLiquor: "",
        influent: "",
        final: "",
      },
      B_weightOfCleanFilter: {
        mixedLiquor: "",
        influent: "",
        final: "",
      },
      // A - B
      C_weightOfDrySolids: {
        mixedLiquor: "",
        influent: "",
        final: "",
      },

      D_volumeOfSampleFiltered: {
        mixedLiquor: "",
        influent: "",
        final: "",
      },

      // C/D * 1,000,000
      E_TSS: {
        mixedLiquor: "",
        influent: "",
        final: "",
      },

      F_weightOfFilterAndAsh: {
        mixedLiquor: "",
        influent: "",
        final: "",
      },

      // F-B
      G_weightOfAsh: {
        mixedLiquor: "",
        influent: "",
        final: "",
      },

      // C - G
      H_weightOfVolatileSolids: {
        mixedLiquor: "",
        influent: "",
        final: "",
      },

      // H / D * 1,000,000
      I_VSS: {
        mixedLiquor: "",
        influent: "",
        final: "",
      },

      // I / E * 100
      J_percentVolatileSolids: {
        mixedLiquor: "",
        influent: "",
        final: "",
      },
    },

    notes: "",
  };

  const [testData, setTestData] = useState(startingReportData);

  return (
    <div>
      <div className="flex mt-10 justify-center">
        <h2>Total Suspended Solids Test</h2>
      </div>
      <div className="flex justify-center">
        <form
          className="flex flex-col gap-3 w-1/2"
          method="post"
          onSubmit={handleSubmit}
        >
          <label>Test Number:</label>
          <input
            id="testNumber"
            type="text"
            name="testNumber"
            value={testData.testNumber}
            onChange={handleChange}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(testData.testData).map(([section, fields]) => (
              <div className="flex flex-col" key={section}>
                <label>{section}</label>
                {Object.entries(fields).map(([field, value]) => (
                  <input
                    key={field}
                    type="text"
                    name={`${section}.${field}`}
                    value={value}
                    onChange={(e) => handleChange(e, section, field)}
                    placeholder={field}
                    className="border border-gray-300 rounded-md py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
                  />
                ))}
              </div>
            ))}
          </div>
          <input type="submit" className="btn max-w-xs" value="Create Report" />
        </form>
      </div>
    </div>
  );
};

export default SuspendedSolidsTestForm;
