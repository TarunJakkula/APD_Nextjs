import React from "react";
import Link from "next/link";
import { title } from "../ui/images";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className={`flex justify-evenly items-center px-[50px] py-[40px] text-white w-[100vw] min-h-fit h-[10vh] bg-transparent`}
    >
      <Link href="/">
        <Image
          src={title()}
          alt="apd."
          className="text-[30px] font-[600]"
          width={60}
          height={60}
        />
      </Link>

      <div className="flex gap-[20px] font-[600]">
        <Link href="/about" className="capitalize">
          about
        </Link>
      </div>
    </div>
  );
};

export default Header;
