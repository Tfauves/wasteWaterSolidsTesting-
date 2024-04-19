"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TotalSuspendedSolidsTestForm = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTssFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const res = await fetch("/api/TSSTest", {
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
    notes: "",
  };

  const [tssFormData, setTssFormData] = useState(startingReportData);

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
          <h4>Create Your Report</h4>
          <label>Test Number</label>
          <input
            id="testNumber"
            name="testNumber"
            type="text"
            onChange={handleChange}
            required={true}
            value={tssFormData.testNumber}
          />
          <label>Notes</label>
          <textarea
            id="notes"
            name="notes"
            onChange={handleChange}
            value={tssFormData.notes}
            rows="5"
          />

          <label>A</label>
          <input
            id="A"
            name="A_dryFilterWithSolids"
            type="text"
            onChange={handleChange}
            required={true}
            placeholder="Dry Filter With Solids"
            value={tssFormData.A_dryFilterWithSolids}
          />

          <label>B</label>
          <input
            id="B"
            name="B_cleanFilter"
            type="text"
            onChange={handleChange}
            required={true}
            placeholder="Clean Filter"
            value={tssFormData.B_cleanFilter}
          />
          <label>C</label>
          <input
            id="C"
            name="C_drySolids"
            type="text"
            onChange={handleChange}
            required={true}
            placeholder="Weight of Dry Solids"
            value={tssFormData.C_drySolids}
          />
          <label>D</label>
          <input
            id="D"
            name="D_volOfSample"
            type="text"
            onChange={handleChange}
            required={true}
            placeholder="Vol of Sample"
            value={tssFormData.D_volOfSample}
          />
          <label>E</label>
          <input
            id="E"
            name="E_tssOfSample"
            type="text"
            onChange={handleChange}
            required={true}
            placeholder="TSS of Sample"
            value={tssFormData.E_tssOfSample}
          />
          <label>F</label>
          <input
            id="F"
            name="F_filterAndAsh"
            type="text"
            onChange={handleChange}
            required={true}
            placeholder="Weight of Filter and Ash"
            value={tssFormData.F_filterAndAsh}
          />
          <label>G</label>
          <input
            id=""
            name="G_weightOfAsh"
            type="text"
            onChange={handleChange}
            required={true}
            placeholder="Weight of Ash"
            value={tssFormData.G_weightOfAsh}
          />
          <label>H</label>
          <input
            id="H"
            name="H_weightOfVolatileSolids"
            type="text"
            onChange={handleChange}
            required={true}
            placeholder="Weight of Volatile Solids"
            value={tssFormData.H_weightOfVolatileSolids}
          />

          <label>I</label>
          <input
            id="I"
            name="I_volatileSolidsVSS"
            type="text"
            onChange={handleChange}
            required={true}
            placeholder="Volatile Solids VSS"
            value={tssFormData.I_volatileSolidsVSS}
          />
          <label>J</label>
          <input
            id="J"
            name="J_percentVolatileSolids"
            type="text"
            onChange={handleChange}
            required={true}
            placeholder="Percent Volatile Solids"
            value={tssFormData.J_percentVolatileSolids}
          />

          <input type="submit" className="btn max-w-xs" value="Create Report" />
        </form>
      </div>
    </div>
  );
};

export default TotalSuspendedSolidsTestForm;
