"use client";

import { useEffect, useState } from "react";
import PathGrid from "./PathGrid";
import PathSetSelector from "./PathSetSelector";
import SetDetails from "./SetDetails";
import Axios from "axios";
import URL from "@/app/util/fetchFrom";

export default function PathShow({ children }) {
  const [gridDetails, setGridDetails] = useState(null);
  const [selected, setSelected] = useState({ index: 0 });
  const [step, setStep] = useState(null);

  useEffect(() => {
    let temp = JSON.parse(sessionStorage.getItem("data"));
    Axios.post(URL, temp, {
      timeout: 3000000,
    })
      .then((res) => {
        temp = res.data;
        for (let i = 0; i < temp.data.length; i++) {
          temp.data[i].set = new Set([...temp.data[i].set]);
        }
        temp.obstacles = new Set(temp.obstacles);
        setGridDetails(temp);
      })
      .catch((err) => {
        // alert("Error with Backend or Timeout");
        console.log(err);
      });
  }, []);

  return (
    <>
      {gridDetails !== null ? (
        <>
          <div className="flex flex-wrap items-center justify-evenly gap-[20px] w-full">
            <div className="animate-slide1NoOpacity w-[35vw] h-[35vw] min-w-[300px] min-h-[350px] flex flex-col justify-evenly items-center">
              <PathGrid
                n={gridDetails.n}
                data={gridDetails.data}
                obstacles={gridDetails.obstacles}
                selected={selected}
                setStep={setStep}
                step={step}
              />
            </div>
            <div className=" lg:px-[15px] px-[10px] lg:py-[15px] py-[10px] bg-[#212121] rounded-xl text-center min-h-[33vw] ">
              <div className=" flex flex-col justify-evenly rounded-xl bg-[#121212] px-[10px] py-[40px] h-full gap-[20px]">
                <PathSetSelector
                  data={gridDetails.data}
                  setSelected={setSelected}
                  selected={selected}
                  setStep={setStep}
                />
                <SetDetails
                  data={gridDetails.data}
                  selected={selected}
                  step={step}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        children
      )}
    </>
  );
}
