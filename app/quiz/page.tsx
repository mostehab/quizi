"use client";
import React from "react";
import { useState } from "react";
import data from "../../lib/data";
import Results from "../../components/results";
import Questions from "../../components/questions";

const page = () => {
  let [counter, setCounter] = useState(0);
  let [correct, setCorrect] = useState(0);
  let [wrong, setWrong] = useState(0);

  const nextquestion = (e: any) => {
    setCounter(counter + 1);

    if (data[counter][0].correctAnswer === e.target.innerHTML) {
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="bg-white w-[500px] p-5">
        {counter >= data.length ? (
          <Results
            correct={correct}
            wrong={wrong}
            testLength={data.length}
          ></Results>
        ) : (
          data[counter].map((obj) => (
            <Questions
              key={obj.id}
              obj={obj}
              nextQuestion={nextquestion}
            ></Questions>
          ))
        )}
      </div>
    </div>
  );
};

export default page;
