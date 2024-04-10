"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
  };

  return (
    <div>
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <label>5 min</label>
        <input
          id="5 min"
          name="5 min"
          type="number"
          //   onChange={handleChange}
          required={true}
          //   value={formData.title}
        />
        <label>10 min</label>
        <input
          id="title"
          name="title"
          type="text"
          //   onChange={handleChange}
          required={true}
          //   value={formData.title}
        />
        <label>15 min</label>
        <input
          id="title"
          name="title"
          type="text"
          //   onChange={handleChange}
          required={true}
          //   value={formData.title}
        />
        <label>20 min</label>
        <input
          id="title"
          name="title"
          type="text"
          //   onChange={handleChange}
          required={true}
          //   value={formData.title}
        />
        <label>25 min</label>
        <input
          id="title"
          name="title"
          type="text"
          //   onChange={handleChange}
          required={true}
          //   value={formData.title}
        />
        <label>30 min</label>
        <input
          id="title"
          name="title"
          type="text"
          //   onChange={handleChange}
          required={true}
          //   value={formData.title}
        />
      </form>
    </div>
  );
};

export default Form;
