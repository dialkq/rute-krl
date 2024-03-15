"use client";

import { ThemeBtn } from "../ThemeBtn";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <div className="w-11/12 lg:w-1/2 mx-auto flex flex-col md:flex-row ">
      <div className="w-full flex items-center py-2 md:py-4 justify-center md:justify-normal">
        <p className="lg:text-xl text-slate-400 text-center font-semibold font-mono">
          rute-krl
        </p>
      </div>
      <div className="flex justify-between items-center py-2 md:py-4">
        <Input placeholder="Cari Stasiun" className="placeholder:text-slate-400 mr-8 rounded-lg font-mono border-2 border-slate-200 focus:border-none w-40" />
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Navbar;
