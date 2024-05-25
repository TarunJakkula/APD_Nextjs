"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sets from "./Sets";
import Grid from "./Grid";
import ObstacleGrid from "./ObstacleGrid";
import Selector from "./Selector";
import newSet from "@/app/util/newSet";
import Modal from "./Info/Modal";

export default function GridInputPage({ colors }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [n] = useState(searchParams.get("n"));
  const [obstacle, setObstacle] = useState(
    searchParams.get("obstacle") === "true"
  );
  const [modal, showModal] = useState(false);
  const [arr, setArr] = useState([newSet()]);
  const [obstacles, setObstacles] = useState(new Set([]));
  const [focus, setFocus] = useState(null);
  const [goalSelection, setGoalSelection] = useState(true);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    let flag = true;
    arr.forEach((obj) => {
      if (obj.set.size <= 0 || obj.set.size > n || obj.start === "null") {
        flag = false;
      }
    });

    setFilled(flag);
  }, [arr, n]);

  function handleClick() {
    if (
      confirm(
        "Submission will upload the data for training and you can't make changes. Click Ok to proceed"
      )
    ) {
      let tempArr = [...arr];
      arr.map((obj, index) => {
        tempArr[index].set = [...obj.set];
      });
      sessionStorage.setItem(
        "data",
        JSON.stringify({ data: tempArr, n: n, obstacles: [...obstacles] })
      );
      router.replace("/path");
    }
  }

  return (
    <>
      {!obstacle && (
        <div className="flex flex-col gap-[20px] items-center ">
          <button
            className={`${
              filled ? "bg-white text-black" : "bg-[#121212] text-white"
            } rounded-md py-[10px] font-bold w-[80%]`}
            disabled={!filled}
            onClick={handleClick}
          >
            {filled ? "Submit" : "Disabled"}
          </button>
          <div className="bg-[#121212] px-[20px] flex flex-col gap-[30px] justify-between py-[20px] rounded-xl w-[300px] min-w-[250px]">
            <Sets
              n={n}
              arr={arr}
              setArr={setArr}
              focus={focus}
              setFocus={setFocus}
              colors={colors}
            />
          </div>
        </div>
      )}

      {obstacle ? (
        <div className=" flex justify-center items-center lg:flex-row flex-col gap-[70px] ">
          <span className="text-white font-bold lg:text-[30px] text-[25px] ">
            Select Obstacles
          </span>
          <div className="w-[35vw] h-[35vw] min-w-[300px] min-h-[300px] ">
            <ObstacleGrid
              n={n}
              obstacles={obstacles}
              setObstacles={setObstacles}
            />
          </div>
          {obstacles.size > n - 1 ? (
            <button
              disabled
              className=" border-transparent shadow-sm md:text-[1.4rem] text-[1.05rem] bg-[#121212] rounded-md text-[#eeeeee] px-[20px] py-[5px]"
            >
              Disabled
            </button>
          ) : (
            <button
              onClick={() => {
                if (obstacles.size === 0) {
                  if (
                    !confirm(
                      "No obstacles are given! Are you sure you want to submit?"
                    )
                  )
                    return;
                }
                confirm(
                  "No more changes to obstacles are allowed. Want to continue?"
                ) && setObstacle(false);
              }}
              className=" hover:border-blue-400 border-transparent shadow-sm transition-all md:text-[1.4rem] text-[1.05rem]  border-2 bg-[#212121] rounded-md text-[#eeeeee] px-[20px] py-[5px] hover:cursor-pointer"
            >
              Confirm
            </button>
          )}
        </div>
      ) : (
        <div className="w-[35vw] h-[40vw] min-w-[300px] min-h-[350px] flex flex-col justify-evenly items-center">
          {focus && (
            <div className="animate-popOut h-[5vw] w-full min-h-[50px] flex justify-center items-center relative">
              <Selector
                goalSelection={goalSelection}
                setGoalSelection={setGoalSelection}
                showModal={showModal}
              />
            </div>
          )}
          {focus !== null ? (
            <Grid
              n={n}
              focus={focus}
              arr={arr}
              setArr={setArr}
              obstacles={obstacles}
              goalSelection={goalSelection}
            />
          ) : (
            <div
              className={`animate-slide1NoOpacityBack rounded-xl flex flex-col gap-[5px] bg-[#212121] px-[10px] py-[10px] w-full h-[35vw] min-h-[300px]`}
            >
              <div className=" w-full h-full bg-[#121212] rounded-lg">
                <span className="text-[#aaaaaa] xl:text-[1.5em] lg:text-[1.1em] text-[0.8em] h-full w-full flex justify-center items-center">
                  Please select a set to show grid
                </span>
              </div>
            </div>
          )}
        </div>
      )}
      <AnimatePresence initial={true} mode="popLayout">
        {modal && <Modal showModal={showModal} />}
      </AnimatePresence>
    </>
  );
}
