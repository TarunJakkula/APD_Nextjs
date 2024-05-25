import InputBody from "./Components/InputBody";

export default function Home() {
  return (
    <div className="px-[20px] py-[40px] flex flex-col min-h-[90vh] justify-center lg:gap-[100px] sm:gap-[70px] gap-[50px] items-center">
      <span
        className={`animate-slide1 xl:text-[4.5rem] lg:text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] text-center text-[#eeeeee] drop-shadow-[0px_0px_50px_rgba(255,255,255,0.5)]`}
      >
        Autonomous Pesticide Deployment
      </span>
      <InputBody />
    </div>
  );
}
