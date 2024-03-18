import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import CardRute from "../CardRute";
const CardStation = () => {
  return (
    <div className="w-full flex flex-col justify-between">
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
          <CardRute />
          <CardRute />
        </div>
      </div>
    </div>
  );
};
export default CardStation;