"use client";

import { SiTestrail } from "react-icons/si";
import { ThemeBtn } from "../ThemeBtn";
import InputSearch from "../InputSearch";

const Navbar = () => {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row py-2 md:py-4">
      <div className="w-full flex items-center justify-between md:justify-normal">
        <div className="flex">
          <SiTestrail className="text-xl text-slate-400 my-auto hover:text-black mr-1" />
          <p className="lg:text-xl text-slate-400 text-center font-semibold font-mono">
            rute-krl
          </p>
        </div>
        <div className="flex md:hidden">
          <ThemeBtn />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <InputSearch />
        <div className="hidden md:flex">
          <ThemeBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
