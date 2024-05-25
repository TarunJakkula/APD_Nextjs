import { useEffect, useState } from "react";
import Image from "next/image";
import * as imgCollection from "@/app/ui/images";
import createGrid from "@/app/util/createGrid";
import GridCell from "./GridCell";

const arrowObj = {
  U: imgCollection.AU,
  D: imgCollection.AD,
  R: imgCollection.AR,
  L: imgCollection.AL,
  END: imgCollection.STOP,
};

const arrowObjBlack = {
  U: imgCollection.AUB,
  D: imgCollection.ADB,
  R: imgCollection.ARB,
  L: imgCollection.ALB,
  END: imgCollection.STOP,
};

export default function PathGrid({
  n,
  data,
  selected,
  obstacles,
  setStep,
  step,
}) {
  const [gridPath, setGridPath] = useState([]);

  useEffect(() => {
    setGridPath(createGrid(n));
  }, [n]);

  return (
    <div className="rounded-xl flex flex-col lg:gap-[5px] gap-[3px] bg-[#212121] lg:px-[10px] lg:py-[10px] py-[6px] px-[6px] w-full h-[35vw] min-h-[300px]">
      {gridPath.length > 0 &&
        gridPath.map((row, rIndex) => {
          return (
            <div
              key={rIndex}
              className={`flex w-full lg:gap-[5px] gap-[3px]`}
              style={{ height: `calc(100% / ${n})` }}
            >
              {row.map((_, cIndex) => {
                return (
                  <div
                    key={cIndex}
                    className={`flex relative h-full justify-center items-center lg:text-[1em] text-[0.7em] ${
                      obstacles.has(rIndex + "," + cIndex)
                        ? "bg-black"
                        : data[selected.index].set.has(rIndex + "," + cIndex)
                        ? data[selected.index].color[1]
                        : data[selected.index].start === rIndex + "," + cIndex
                        ? "bg-[#ffffff] rounded-full"
                        : data[selected.index].path[rIndex + "," + cIndex] !==
                          undefined
                        ? "bg-white"
                        : "bg-[#121212] text-white"
                    }`}
                    style={{ width: `calc(100% / ${n})` }}
                  >
                    {obstacles.has(rIndex + "," + cIndex) ? (
                      <span
                        className={`${
                          n > 6 ? "text-[0.7em]" : null
                        } text-white`}
                      >
                        Obstacle
                      </span>
                    ) : data[selected.index].path[rIndex + "," + cIndex] !==
                      undefined ? (
                      <GridCell
                        list={data[selected.index].path[rIndex + "," + cIndex]}
                        arrowObj={arrowObj}
                        arrowObjBlack={arrowObjBlack}
                        setStep={setStep}
                        step={step}
                        cell={rIndex + "," + cIndex}
                        start={data[selected.index].start}
                      />
                    ) : (
                      rIndex * n + cIndex
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
