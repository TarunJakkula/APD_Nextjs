import Input from "./Input";

const InputBody = () => {
  const arr = [3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="animate-slide2 flex flex-col gap-[30px] items-center">
      <Input arr={arr} />
    </div>
  );
};

export default InputBody;
