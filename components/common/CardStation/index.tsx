import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import CardRute from "../CardRute";
const CardStation = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      {/* STATION TITLE */}
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="text-slate-500 font-mono text-sm">Stasiun</p>
          <p className="text-3xl text-black font-mono font-semibold">Bogor</p>
        </div>
        <MdOutlineKeyboardArrowUp className="text-xl text-slate-500 cursor-pointer hover:text-black" />
      </div>

      {/* RUTE DAN JADWAL */}
      <div className="flex">
        <div className="mt-3 w-1 h-300 bg-emerald-500"></div>
        <div className="w-full">
          <CardRute />
          <CardRute />
          <CardRute />
        </div>
      </div>
    </div>
  );
};
export default CardStation;