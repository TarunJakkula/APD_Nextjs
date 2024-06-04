import { useEffect, useState } from "react";

export default function SetDetails({ data, selected, step }) {
  const [visitedAllGoals, setVisitedAllGoals] = useState(null);
  const [cost, setCost] = useState(0);
  const [path, setPath] = useState(data[selected.index].pathOrder);
  useEffect(() => {
    let count = 0;
    data[selected.index].set.forEach((ele) =>
      data[selected.index].path[ele] !== undefined ? count++ : null
    );
    setVisitedAllGoals(count === data[selected.index].set.size);
    setPath(data[selected.index].pathOrder);
  }, [selected, data]);

  useEffect(() => {
    setCost(count());
  }, []);

  function count() {
    return path.length - 1;
  }

  return (
    <div className="md:h-[450px] h-[240px] flex flex-col gap-5 overflow-y-auto md:w-[400px] w-[250px]">
      <span className="animate-slide4 text-white lg:text-[30px] text-[20px] ">
        <span>Cost :</span> <span className="text-blue-400">{cost} steps</span>
      </span>

      <span
        className={`animate-slide4 text-white lg:text-[30px] text-[20px] text-balance `}
      >
        <span>Status: </span>
        <span
          className={`${
            visitedAllGoals === null
              ? "text-white"
              : visitedAllGoals
              ? "text-green-300"
              : "text-red-400"
          }`}
        >
          {visitedAllGoals === null
            ? "Analysing"
            : visitedAllGoals
            ? "Visited all Goals"
            : "Failed to visit all Goals"}
        </span>
      </span>

      <span
        className={`animate-slide4 text-white lg:text-[30px] text-[20px] text-balance `}
      >
        <span>Step: </span>
        {step === null ? (
          <ul className="text-white">
            <li>cell: None</li>
          </ul>
        ) : (
          <ul className="text-white ">
            <li>
              cell: <span className="text-[#6495ed]">{step.cell}</span>
            </li>
            <li>
              step number: <span className="text-[#7fffd4]">{step.number}</span>
            </li>
          </ul>
        )}
      </span>
      <span
        className={`animate-slide4 text-white lg:text-[30px] text-[20px] w-full flex flex-col items-center `}
      >
        <span>Path:</span>
        <span className="flex gap-[5px] flex-wrap justify-center  w-full ">
          {path.map((ele, index) => {
            return (
              <span key={index} className="text-nowrap">
                {`${ele} ${path.length - 1 !== index ? "-" : ""} `}
              </span>
            );
          })}
        </span>
      </span>
    </div>
  );
}
