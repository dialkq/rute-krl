"use client";
import CardNextSchedule from "../CardNextSchedule";
import CardSchedule from "../CardSchedule";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CardRute = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const handleToggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  return (
    <div className="flex flex-col w-full mx-auto border-l-4 border-emerald-500 border-b border-b-foreground/90 pb-10">
      {/* NEXT STATION */}
      <div className="flex w-full justify-between ">
        <div className="pl-3">
          <p className="text-foreground/80 tracking-widest text-xs">
            Arah menuju
          </p>
          <p className="text-xl font-semibold font-mono">Angke</p>
        </div>
        <div className="">
          <p className="text-foreground/80 tracking-widest text-xs text-end">
            Berangkat pukul
          </p>
          <p className="font-bold text-lg font-mono tracking-widest text-end">
            15.10
          </p>
          <p className="text-foreground/80 tracking-widest text-xs text-end">
            dalam 2 menit
          </p>
        </div>
      </div>

      {/* NEXT SCHEDULE TIME */}
      <div className="flex flex-col w-full">
        <p className="pl-3 mt-3 text-foreground/80 tracking-widest text-xs">
          Jam berikutnya:
        </p>
        <div className="grid grid-cols-3 gap-4 pl-3">
          <CardNextSchedule />
        </div>
      </div>

      {/* ALL SCHEDULE */}
      <div className="mt-3 ml-3 flex flex-col">
        <div className="flex justify-between">
          <p
            className="text-foreground/80 tracking-widest text-xs cursor-pointer hover:underline hover:text-foreground/100"
            onClick={handleToggleSchedule}
          >
            Lihat semua jadwal
          </p>
          {/* ARROW CHANGE FUNCTION */}
          {showSchedule ? (
            <MdOutlineKeyboardArrowUp
              className="text-sm text-foreground/50 cursor-pointer hover:text-foreground/80"
              onClick={handleToggleSchedule}
            />
          ) : (
            <MdOutlineKeyboardArrowDown
              className="text-sm text-foreground/50 cursor-pointer hover:text-foreground/80"
              onClick={handleToggleSchedule}
            />
          )}
        </div>
        {showSchedule && (
          <div className="mt-1 grid grid-cols-4 gap-2 pt-1 md:grid-cols-5">
            <CardSchedule />
            <CardSchedule />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardRute;
