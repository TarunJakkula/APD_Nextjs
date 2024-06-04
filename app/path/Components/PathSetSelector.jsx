export default function PathSetSelector({
  data,
  setSelected,
  selected,
  setStep,
}) {
  const handleBack = () => {
    if (selected.index - 1 >= 0) {
      setSelected({ index: selected.index - 1 });
      setStep(null);
    }
  };

  const handleNext = () => {
    if (selected.index + 1 !== data.length) {
      setSelected({ index: selected.index + 1 });
      setStep(null);
    }
  };

  return (
    <div className="animate-popOut lg:text-[30px] text-[20px] flex justify-between items-center gap-[20px] pb-[20px] border-b-[5px] border-[#212121]">
      <button
        className={`${
          selected.index === 0
            ? "text-[#121212]"
            : "text-white hover:bg-white hover:text-black"
        } rounded-md px-[2px] transition-all`}
        onClick={handleBack}
        disabled={selected.index === 0}
      >
        {"<"}
      </button>
      <div className={`${data[selected.index].color[2]} w-[10ch] truncate`}>
        {data[selected.index].Value}
      </div>
      <button
        className={`${
          selected.index + 1 === data.length
            ? "text-[#121212]"
            : "text-white hover:bg-white hover:text-black"
        } rounded-md px-[2px] transition-all`}
        onClick={handleNext}
        disabled={selected.index + 1 === data.length}
      >
        {">"}
      </button>
    </div>
  );
}
