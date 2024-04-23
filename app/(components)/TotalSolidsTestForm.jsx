"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TotalSolidsTestForm = () => {
  const router = useRouter;
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const res = await fetch("/api/", {
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

  const startingData = {
    filterNumber: "",
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
  };
  const [formData, setFormData] = useState(startingData);

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
          <input
            type="text"
            name="filterNumber"
            value={formData.filterNumber}
            onChange={handleChange}
            placeholder="Filter Number"
          />
          <div>
            <div>
              <h5>Weight of Dry Filter with Solids</h5>
            </div>
            <label>Mixed Liquor</label>
            <input
              type="text"
              name="A_weightDryFilterAndSolids.mixedLiquor"
              value={formData.A_weightDryFilterAndSolids.mixedLiquor}
              onChange={handleChange}
              placeholder="Mixed Liquor"
            />
            <div>
              <label>Influent</label>
              <input
                type="text"
                name="A_weightDryFilterAndSolids.influent"
                value={formData.A_weightDryFilterAndSolids.influent}
                onChange={handleChange}
                placeholder="Influent"
              />
            </div>
            <div>
              <label>Final</label>
              <input
                type="text"
                name="A_weightDryFilterAndSolids.final"
                value={formData.A_weightDryFilterAndSolids.final}
                onChange={handleChange}
                placeholder="Final"
              />
            </div>
          </div>
          <input type="submit" className="btn max-w-xs" value="Create Report" />
        </form>
      </div>
    </div>
  );
};

export default TotalSolidsTestForm;
