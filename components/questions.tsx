import React from "react";

const Questions = ({ obj, nextQuestion }) => {
  return (
    <div key={obj.id}>
      <p className="text-[20px] font-semibold mb-5">{obj.question}</p>

      <ul className="overflow-hidden">
        {obj.options.map((answers) => (
          <li
            key={answers}
            className="my-3 bg-slate-200 p-3 max-w-[fit-content] hover:bg-sky-700 hover:text-white cursor-pointer"
            onClick={nextQuestion}
          >
            {answers}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
