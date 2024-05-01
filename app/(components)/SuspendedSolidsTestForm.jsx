"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
/// need to fix this form.
const SuspendedSolidsTestForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});

  const handleChange = (e, section, field) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      testData: {
        ...prevState.testData,
        [section]: {
          ...prevState.testData[section],
          [field]: value,
        },
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const res = await fetch("/api/SuspendedSolidsTest", {
      method: "POST",
      body: JSON.stringify({ formData }),
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Iterate over testData fields and create input fields */}
            {Object.entries(formData.testData).map(([section, fields]) => (
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
