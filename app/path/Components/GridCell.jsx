import Image from "next/image";
import { useState } from "react";

function GridCell({
  list,
  arrowObj,
  arrowObjBlack,
  setStep,
  step,
  cell,
  start,
}) {
  const [select, setSelect] = useState(0);

  function handleNextClick() {
    if (select + 1 !== list.length) {
      setSelect(select + 1);
      setStep({ cell: cell, number: list[select + 1][1] });
    }
  }

  function handleBackClick() {
    if (select >= 0) {
      setSelect(select - 1);
      setStep({ cell: cell, number: list[select - 1][1] });
    }
  }

  return (
    <>
      <button
        className={`absolute left-0 h-full z-20 ${
          select === 0
            ? "hidden"
            : "block text-black hover:bg-black hover:text-white"
        }  px-[2px] transition-all `}
        onClick={handleBackClick}
        disabled={select === 0}
      >
        {"<"}
      </button>
      <div className="flex flex-col relative">
        <span className="text-black text-center lg:block hidden absolute">
          {list !== undefined && list[select][1]}
        </span>
        {
          <Image
            src={arrowObjBlack[list[select][0]]()}
            alt={list[select][0]}
            width={500}
            height={500}
            onClick={() => {
              if (list !== undefined)
                setStep({ cell: cell, number: list[select][1] });
            }}
          />
        }
      </div>
      <button
        className={`absolute right-0 h-full z-20 ${
          select + 1 === list.length
            ? "hidden"
            : "block text-black hover:bg-black hover:text-white"
        }  px-[2px] transition-all`}
        onClick={handleNextClick}
        disabled={select + 1 === list.length}
      >
        {">"}
      </button>
    </>
  );
}

export default GridCell;
