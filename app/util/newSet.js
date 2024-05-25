const newSet = (
  clr = "red",
  bgClr = "bg-[#d73a3a]",
  txtClr = "text-[#d73a3a]",
  vlu = "Untitled 1"
) => {
  return {
    color: [clr, bgClr, txtClr],
    Value: vlu,
    set: new Set([]), // goal set
    start: "null",
  };
};

export default newSet;
