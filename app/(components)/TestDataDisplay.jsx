import React from "react";

const TestDataDisplay = ({ timeMarks }) => {
  // Handle empty or null timeMarks
  if (!timeMarks || Object.keys(timeMarks).length === 0) {
    return <div>No time marks available</div>;
  }

  return (
    <div>
      <h2>Time Marks:</h2>
      <ul>
        {Object.entries(timeMarks).map(([key, value]) => (
          <li key={key}>
            <strong>{key}: </strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestDataDisplay;
