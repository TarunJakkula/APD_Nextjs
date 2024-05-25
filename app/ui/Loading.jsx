export default function Loading() {
  return (
    <div className="text-white md:w-[300px] md:h-[300px] w-[200px] h-[200px] relative grid place-content-center">
      <div className=" animate-around md:w-[30px] md:h-[30px] w-[20px] h-[20px] rounded-full absolute top-0 left-0 bg-blue-400"></div>
      <span className="md:text-[30px] text-[20px]">Loading...</span>
    </div>
  );
}
