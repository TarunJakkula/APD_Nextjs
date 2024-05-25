"use client";
import { useState } from "react";
import Link from "next/link";

const Input = ({ arr }) => {
  const [gridsize, setGridSize] = useState(3);
  const [obstacle, setObstacle] = useState(true);
  return (
    <div className="flex flex-col gap-[40px] items-center">
      <div className="flex md:flex-row flex-col md:gap-[30px] gap-[20px]">
        <div className="flex flex-col md:gap-[30px] gap-[15px] items-center justify-center">
          <span className="text-[#eeeeee] md:text-[1.5rem] text-[1.2rem] drop-shadow-[0px_0px_50px_rgb(96,165,250)]">
            Enter the grid size
          </span>
          <select
            name="grid-size"
            id="grid"
            className="focus:border-blue-400 hover:border-blue-400 w-fit focus:ring-blue-400 transition-all shadow-sm border-transparent border-2 md:text-[1.4rem] text-[1.05rem] bg-[#212121] rounded-md text-[#eeeeee] px-[5px] py-[5px]"
            onChange={(event) => {
              setGridSize(parseInt(event.target.value));
            }}
          >
            {arr.map((ele, index) => {
              return (
                <option key={index} value={`${ele}`}>
                  {ele}
                </option>
              );
            })}
          </select>
        </div>
        <div className="md:w-[2px] bg-white"></div>
        <div className="flex flex-col md:gap-[30px] gap-[15px] items-center justify-center">
          <span className="text-[#eeeeee] md:text-[1.5rem] text-[1.2rem] drop-shadow-[0px_0px_50px_rgb(96,165,250)]">
            Include obstacles
          </span>
          <select
            name="obstacle"
            id="obsc"
            className="focus:border-blue-400 hover:border-blue-400 w-fit focus:ring-blue-400 transition-all shadow-sm border-transparent border-2 md:text-[1.4rem] text-[1.05rem] bg-[#212121] rounded-md text-[#eeeeee]  px-[5px] py-[5px]"
            onChange={(event) =>
              event.target.value === "True"
                ? setObstacle(true)
                : setObstacle(false)
            }
          >
            <option value="True">Yes</option>
            <option value="False">No</option>
          </select>
        </div>
      </div>

      <Link
        href={{ pathname: "/grid", query: { n: gridsize, obstacle: obstacle } }}
        className="hover:border-blue-400 border-transparent shadow-sm transition-all md:text-[1.4rem] text-[1.05rem]  border-2 bg-[#212121] rounded-md text-[#eeeeee] px-[20px] py-[5px] hover:cursor-pointer"
      >
        Enter
      </Link>
    </div>
  );
};

export default Input;
