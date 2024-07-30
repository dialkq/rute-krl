"use client";
import { DarkTheme } from "../DarkMode";
import { SiTestrail } from "react-icons/si";
import { AddStation } from "../AddStation";

const Navbar = () => {
  return (
    <div className="flex w-full flex-col my-auto py-2" data-testid="navbar">
      <div className="flex w-full justify-between">
        {/* LOGO */}
        <div className="flex cursor-pointer group my-auto">
          <SiTestrail data-testid="testrail-icon" className="text-xl text-foreground/40 my-auto mr-0.5 cursor-pointer group-hover:text-foreground/90" />
          <p className="lg:text-xl text-foreground/40 cursor-pointer text-center font-semibold font-mono group-hover:text-foreground/90">
            rute-krl
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {/* TAMBAHKAN STASIUN */}
          <AddStation />
          {/* BUTTON CHANGE THEME */}
          <DarkTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;