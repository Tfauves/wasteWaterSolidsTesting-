"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
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
    console.log("submitted");
    const res = await fetch("/api/Reports", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to create Ticket!");
    }

    router.refresh();
    router.push("/");
  };

  const startingReportData = {
    fivemin: "",
    tenmin: "",
    fifteenmin: "",
    twentymin: "",
    twentyfivemin: "",
    thirtymin: "",
  };

  const [formData, setFormData] = useState(startingReportData);
  console.log(formData);
  return (
    <div>
      <h1>Settle'O'meter Report</h1>
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <label>5 min</label>
        <input
          id="5 min"
          name="fivemin"
          type="text"
          onChange={handleChange}
          //   required={true}
          value={formData.fivemin}
        />
        <label>10 min</label>
        <input
          id="10 min"
          name="tenmin"
          type="text"
          onChange={handleChange}
          //   required={true}
          value={formData.tenmin}
        />
        <label>15 min</label>
        <input
          id="15 min"
          name="fifteenmin"
          type="text"
          onChange={handleChange}
          //   required={true}
          value={formData.fifteenmin}
        />
        <label>20 min</label>
        <input
          id="20 min"
          name="twentymin"
          type="text"
          onChange={handleChange}
          //   required={true}
          value={formData.twentymin}
        />
        <label>25 min</label>
        <input
          id="25 min"
          name="twentyfivemin"
          type="text"
          onChange={handleChange}
          //   required={true}
          value={formData.twentyfivemin}
        />
        <label>30 min</label>
        <input
          id="30 min"
          name="thirtymin"
          type="text"
          onChange={handleChange}
          //   required={true}
          value={formData.thirtymin}
        />
        <input type="submit" className="btn max-w-xs" value="Create Report" />
      </form>
    </div>
  );
};

export default Form;
