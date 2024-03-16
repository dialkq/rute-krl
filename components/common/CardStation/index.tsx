import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const CardStation = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col w-1/2">
        <p className="text-slate-500 font-mono text-sm">Stasiun</p>
        <p className="text-3xl text-black font-mono font-semibold">Bogor</p>
      </div>
      <MdOutlineKeyboardArrowUp className="my-auto text-xl text-slate-500" />
    </div>
  );
};
export default CardStation;
