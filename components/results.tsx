import React from "react";

const Results = ({ correct, wrong, testLength }) => {
  return (
    <div>
      <div className="text-[20px]">
        {testLength} questions has been answered
      </div>
      <div className="p5">Correct Answers : {correct}</div>
      <div className="p5">Wrong Asnwers: {wrong}</div>
    </div>
  );
};

export default Results;
