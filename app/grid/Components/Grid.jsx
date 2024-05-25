import { useEffect, useState } from "react";
import Image from "next/image";
import createGrid from "@/app/util/createGrid";
import { OB } from "@/app/ui/images";

export default function Grid({
  n,
  focus,
  arr,
  setArr,
  obstacles,
  goalSelection,
}) {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(createGrid(n));
  }, [n]);

  return (
    <div
      className={` ${
        focus && "animate-slide1NoOpacity"
      } rounded-xl flex flex-col lg:gap-[5px] gap-[3px] bg-[#212121] lg:px-[10px] lg:py-[10px] py-[6px] px-[6px] w-full h-[35vw] min-h-[300px]`}
    >
      {grid.length > 0 &&
        grid.map((row, rIndex) => {
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
                    className={`animate-fade1 grid place-content-center lg:text-[1em] text-[0.7em] h-full ${
                      obstacles.has(rIndex + "," + cIndex)
                        ? "bg-black"
                        : arr[focus.index] !== undefined &&
                          arr[focus.index].set.has(rIndex + "," + cIndex)
                        ? arr[focus.index]["color"][1]
                        : arr[focus.index] !== undefined &&
                          arr[focus.index].start === rIndex + "," + cIndex
                        ? "bg-white rounded-full "
                        : "bg-[#121212] text-white"
                    } ${
                      !obstacles.has(rIndex + "," + cIndex)
                        ? goalSelection
                          ? arr[focus.index] !== undefined &&
                            arr[focus.index].start !== rIndex + "," + cIndex &&
                            "cursor-pointer"
                          : arr[focus.index] !== undefined &&
                            !arr[focus.index].set.has(rIndex + "," + cIndex) &&
                            "cursor-pointer"
                        : "cursor-default"
                    }`}
                    style={{ width: `calc(100% / ${n})` }}
                    onClick={() => {
                      let tempArr = [...arr];
                      let cords = rIndex + "," + cIndex;
                      if (obstacles.has(cords)) return;
                      if (
                        goalSelection &&
                        arr[focus.index] !== undefined &&
                        arr[focus.index].start !== cords
                      ) {
                        let temp = new Set([...arr[focus.index].set]);
                        if (!temp.has(cords)) {
                          temp.add(cords);
                        } else temp.delete(cords);
                        tempArr[focus.index].set = temp;
                      } else {
                        if (!goalSelection && arr[focus.index] !== undefined) {
                          if (!arr[focus.index].set.has(cords)) {
                            if (tempArr[focus.index].start === cords)
                              tempArr[focus.index].start = "null";
                            else tempArr[focus.index].start = cords;
                          }
                        }
                      }
                      setArr(tempArr);
                    }}
                  >
                    {obstacles.has(rIndex + "," + cIndex) ? (
                      <span
                        className={`${
                          n > 6 ? "text-[0.7em]" : null
                        } text-white`}
                      >
                        Obstacle
                      </span>
                    ) : arr[focus.index] !== undefined &&
                      arr[focus.index].start === rIndex + "," + cIndex ? (
                      "Start"
                    ) : arr[focus.index].set.has(rIndex + "," + cIndex) ? (
                      "Goal"
                    ) : (
                      rIndex * n + cIndex + 1
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
