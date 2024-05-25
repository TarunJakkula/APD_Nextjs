import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className={`flex justify-around items-center px-[50px] py-[40px] text-white w-[100vw] min-h-fit h-[10vh] bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
      `}
    >
      <span className="text-[30px] font-[600]">APD.</span>
      <div className="flex gap-[20px] font-[600]">
        <Link href={{ pathname: "/" }} replace={true}>
          HOME
        </Link>
        <Link href={{ pathname: "/about" }}>ABOUT</Link>
      </div>
    </div>
  );
};

export default Header;
