import { color } from "framer-motion";

function Info() {
  const list = [
    { color: ["bg-white"], info: "start state" },
    { color: ["bg-black"], info: "Obstacles" },
    {
      color: ["bg-[#add8e6]", "bg-[#90ee90]", "bg-[#00ff00]"],
      info: "goal states",
    },
  ];
  const info = [
    "Max of [n] sets can be created",
    "A total of [n] goals can be selected for one set",
    "Each set must have atleast one goal and a start to enable submission",
  ];
  return (
    <>
      <span className="text-white lg:text-[2em] text-[1.5em] border-b-2 border-b-white pb-3 font-bold tracking-tighter">
        Notations
      </span>
      <div className="flex flex-col gap-[20px]">
        {list.map((obj, index) => {
          return (
            <div key={index} className="flex items-center gap-[20px]">
              <div className="flex gap-[5px]">
                {obj.color.map((ele, iIndex) => {
                  return (
                    <div
                      key={iIndex}
                      className={`${ele} w-10 h-10 ${
                        obj.info === "start state"
                          ? "rounded-full"
                          : "rounded-md"
                      } ${ele}`}
                    ></div>
                  );
                })}
              </div>
              <span className="text-white"> {obj.info}</span>
            </div>
          );
        })}
      </div>

      <span className="text-white lg:text-[2em] text-[1.5em] border-b-2 border-b-white pb-3 font-bold tracking-tighter">
        Points to note
      </span>
      <ol className="text-white flex flex-col gap-[20px]">
        {info.map((ele, index) => {
          return <li key={index}> - {ele}</li>;
        })}
      </ol>
    </>
  );
}

export default Info;
