import { motion } from "framer-motion";

export default function Selector({
  goalSelection,
  setGoalSelection,
  showModal,
}) {
  return (
    <>
      <div className="w-[30%] h-[50%] py-[1%] px-[1%] lg:text-[1em] text-[0.7em] min-w-[100px] min-h-[30px] rounded-full grid grid-cols-2 bg-[#121212]">
        <div
          className={`${
            goalSelection && "bg-[#212121]"
          } rounded-full text-white flex justify-center items-center cursor-pointer`}
          onClick={() => {
            setGoalSelection(true);
          }}
        >
          Goal
        </div>
        <div
          className={`${
            !goalSelection && "bg-[#212121]"
          } rounded-full text-white flex justify-center items-center cursor-pointer`}
          onClick={() => {
            setGoalSelection(false);
          }}
        >
          Start
        </div>
      </div>
      <motion.button
        onClick={() => {
          showModal(true);
        }}
        className="bg-white text-black w-[15%] h-[50%] py-[1%] px-[1%] lg:text-[1em] text-[0.7em] min-w-[50px] min-h-[30px] rounded-full absolute right-2"
      >
        info?
      </motion.button>
    </>
  );
}
