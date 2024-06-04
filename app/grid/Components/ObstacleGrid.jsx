import { useEffect, useState } from "react";
import createGrid from "@/app/util/createGrid";

function ObstacleGrid({ n, obstacles, setObstacles }) {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(createGrid(n));
  }, [n]);

  return (
    <div
      className={` rounded-xl flex flex-col lg:gap-[5px] gap-[3px] bg-[#212121] lg:px-[10px] lg:py-[10px] py-[6px] px-[6px] w-full h-[35vw] min-h-[300px]`}
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
                    className={` h-full cursor-pointer grid place-content-center md:text-[1em] text-[0.7em] ${
                      obstacles !== undefined &&
                      obstacles.has(rIndex + "," + cIndex)
                        ? " bg-black"
                        : "bg-[#121212] text-white"
                    } `}
                    style={{ width: `calc(100% / ${n})` }}
                    onClick={() => {
                      let cords = rIndex + "," + cIndex;
                      if (obstacles !== undefined) {
                        let temp = new Set([...obstacles]);
                        if (!temp.has(cords)) {
                          temp.add(cords);
                        } else temp.delete(cords);
                        setObstacles(temp);
                      }
                    }}
                  >
                    {obstacles.has(rIndex + "," + cIndex) ? (
                      <span
                        className={`${
                          n > 6 ? "text-[0.7em]" : null
                        } text-white`}
                      >
                        Obs
                      </span>
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

export default ObstacleGrid;
