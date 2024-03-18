"use client";

import { SiTestrail } from "react-icons/si";
import { ThemeBtn } from "../ThemeBtn";
import { Input } from "../../ui/input";

const Navbar = () => {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row ">
      <div className="w-full flex items-center py-2 md:py-4 justify-between md:justify-normal">
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
      <div className="flex justify-between items-center md:py-4">
        <Input
          placeholder="Cari Stasiun"
          className="placeholder:text-slate-400 md:mr-3 rounded-lg font-mono border-2 border-slate-200 focus:border-none w-full md:w-52 lg:w-60"
        />
        <div className="hidden md:flex">
          <ThemeBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
