"use client";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import CardRute from "../CardRute";
import React from "react";

const CardStation = () => {
  return (
    <div className="w-full flex flex-col justify-between mt-5 mb-10 md:mt-5 md:mb-16">
      {/* STATION TITLE */}
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="text-foreground/80 font-mono text-sm">Stasiun</p>
          <p className="text-3xl font-mono font-extrabold">Bogor</p>
        </div>
        <MdOutlineKeyboardArrowUp className="text-xl text-foreground/50 cursor-pointer hover:text-foreground/100" />
      </div>

      {/* RUTE DAN JADWAL */}
      <div className="flex mt-3">
        <div className="w-full">
          <CardRute />
        </div>
      </div>
    </div>
  );
};
export default CardStation;