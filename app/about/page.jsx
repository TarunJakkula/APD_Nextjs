import Image from "next/image";
import { details, content } from "@/app/util/aboutDetails";
import { flowWhite, flowBlack } from "../ui/images";

export default function About() {
  return (
    <div className="text-white px-[40px] w-[100vw] flex flex-col justify-center items-center md:mt-[100px] mt-[60px] mb-[60px]">
      <span className="text-white md:text-[2.5em] text-[2em] border-b-white border-b-4">
        Team
      </span>
      <div className="flex justify-center items-center lg:flex-row flex-col w-full mt-[50px] gap-[60px]">
        {details.map((obj, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-evenly items-center bg-[#212121] py-[20px] px-[20px] rounded-md "
            >
              <div className="h-[200px] grid place-content-center clip-circle">
                <Image src={obj.photo} alt="" className="w-[150px] h-auto" />
              </div>
              <span className="text-white md:text-[1.6em] text-[1.2em]">
                {obj.name}
              </span>
              <span className="">MVSR Engineering College</span>
            </div>
          );
        })}
      </div>
      <span className="text-white md:text-[2.5em] text-[2em] border-b-white border-b-4 mt-[100px] mb-[60px]">
        About
      </span>
      <div className="flex flex-wrap gap-[20px] justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[40px] md:w-[50%] w-[80%] text-center">
          {content.map((obj, index) => {
            return (
              <span
                key={index}
                className="text-white md:text-[1.5em] text-[1.2em]"
              >
                {obj}
              </span>
            );
          })}
        </div>
        <Image src={flowBlack()} alt="" />
      </div>
    </div>
  );
}
