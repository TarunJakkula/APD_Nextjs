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
    let countNo = 0;
    Object.values(data[selected.index].path).forEach((ele) => {
      countNo += ele.length;
    });
    return countNo - 1;
  }

  return (
    <div>
      <span className="animate-slide4 text-white lg:text-[30px] text-[20px] ">
        Cost : <span className="text-blue-400">{cost} steps</span>
      </span>
      <br />
      <span
        className={`animate-slide4 text-white lg:text-[30px] text-[20px] text-balance `}
      >
        Status:{" "}
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
      <br />
      <span
        className={`animate-slide4 text-white lg:text-[30px] text-[20px] w-full flex flex-col items-center `}
      >
        <span>Path:</span>
        <span className="flex gap-[5px] flex-wrap justify-center max-w-[200px]">
          {path.map((ele, index) => {
            return (
              <span key={index} className="text-nowrap">
                {`${ele} ${path.length - 1 !== index ? "-" : ""} `}
              </span>
            );
          })}
        </span>
      </span>
      <br />
      <br />
      <span
        className={`animate-slide4 text-white lg:text-[30px] text-[20px] text-balance border-t-2 border-t-white pt-[10px]`}
      >
        Step:{" "}
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
    </div>
  );
}
