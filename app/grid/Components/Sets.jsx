import { useEffect, useState } from "react";
import Image from "next/image";
import editButton from "../../../public/edit_FILL0_wght400_GRAD0_opsz24.svg";
import newSet from "@/app/util/newSet";

export default function Sets({ n, arr, setArr, focus, setFocus, colors }) {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (arr.length <= 1) setEdit(false);
  }, [arr]);
  return (
    <>
      <div className="ml-[5px] flex justify-between items-center text-white font-bold text-[30px] ">
        <span>Sets</span>
        {arr.length > 1 && (
          <button
            onClick={() => setEdit(!edit)}
            className="animate-fade1 bg-white rounded-full px-[20px] py-[3px]"
          >
            <Image src={editButton} alt="Edit" />
          </button>
        )}
      </div>
      <div className="min-h-[160px] max-h-[40vh] px-[10px] overflow-y-auto ">
        {arr.map((obj, index) => {
          return (
            <div key={index}>
              <div className={`flex gap-[10px]`}>
                <button
                  onClick={() => {
                    if (focus !== null && focus.index === index) setFocus(null);
                    else setFocus({ index: index });
                  }}
                  className={`flex w-full ${
                    focus !== null && focus.index === index
                      ? "bg-white text-[#121212]"
                      : "bg-[#212121] text-white"
                  } hover:border-blue-400 border-2 border-transparent items-center relative px-[20px] justify-between rounded-lg h-[80px] `}
                >
                  <div className="flex gap-[10px] items-center">
                    <div className={`${obj.color[1]} h-[30px] rounded-md`}>
                      &nbsp;
                    </div>
                    <input
                      id={index}
                      type="text"
                      className="sm:w-[13ch] w-[9ch] truncate px-[5px] bg-transparent border-transparent "
                      value={obj.Value}
                      onChange={(event) => {
                        let tempArr = [...arr];
                        tempArr[index].Value = event.target.value;
                        setArr(tempArr);
                      }}
                    />
                  </div>
                  <div className="absolute top-[35%] right-[5%] flex gap-[10px]">
                    {arr[index].set.size > n && (
                      <div className="animate-popOut bg-red-500 rounded-full font-bold px-[10px]">
                        !
                      </div>
                    )}
                  </div>
                </button>
                {arr.length > 1 && edit && (
                  <button
                    className={`animate-popOut text-black bg-white my-[20px] px-[6px] font-bold rounded-md transition-all text-center`}
                    onClick={() => {
                      let tempArr = [...arr];
                      colors[arr[index].color[0]] = [
                        arr[index].color[1],
                        arr[index].color[2],
                      ];
                      tempArr.splice(index, 1);
                      if (focus === null);
                      else if (focus.index > index) {
                        let temp = { ...focus };
                        temp.index--;
                        setFocus(temp);
                      } else if (focus.index === index) setFocus(null);
                      setArr(tempArr);
                    }}
                  >
                    X
                  </button>
                )}
              </div>

              <div className="bg-[#363636] my-[20px] h-[2px]"></div>
            </div>
          );
        })}
      </div>
      {arr.length < n ? (
        <button
          className="flex bg-[#212121] items-center text-[25px] px-[20px] justify-center rounded-lg h-[50px] text-white"
          onClick={() => {
            let keys = Object.keys(colors);
            let color = keys[(keys.length * Math.random()) << 0];
            setArr([
              ...arr,
              newSet(
                color,
                colors[color][0],
                colors[color][1],
                "Untitled " + (arr.length + 1)
              ),
            ]);
            delete colors[color];
          }}
        >
          +
        </button>
      ) : (
        <span className=" grid place-content-center text-center text-[0.8em] px-[20px] h-[50px] text-white font-medium">
          Limit for different sets is reached
        </span>
      )}
    </>
  );
}
