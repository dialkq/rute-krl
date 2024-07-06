import { IoIosArrowUp } from "react-icons/io";

const CardStation = () => {
  return (
    <div className="w-full">
      {/* NAMA STASIUN */}
      <div className="w-full flex justify-between my-auto">
        <p className="text-foreground/80 font-bold text-xl lg:text-2xl capitalize">
          nama stasiun
        </p>
        <IoIosArrowUp className="my-auto text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
      </div>

      {/* DATA STASIUN MAPING */}
      <div className="w-full flex flex-col border-l-4 border-green-400 my-5">
        {/* ARAH MENUJU & JAM BERANGKAT */}
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
          <div className="w-full flex justify-between py-3 my-auto">
            <p className="pl-3 text-foreground/80 tracking-widest text-xs">
              Jam berikutnya:
            </p>
            <IoIosArrowUp className="my-auto text-xs text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
          </div>
          {/* CARD SEMUA JADWAL */}
          <div className="ml-3 grid grid-cols-4 gap-3 md:grid-cols-5 border-b pb-5 border-foreground/50">
            {/* MAPING SEMUA JADWAL */}
            <div className="bg-foreground/10 rounded-md flex py-1 text-sm my-auto">
              <p className="font-mono text-sm md:text-base text-center mx-auto tracking-widest">
                10.00
              </p>
            </div>
            <div className="bg-foreground/10 rounded-md flex py-1 text-sm my-auto">
              <p className="font-mono text-sm md:text-base text-center mx-auto tracking-widest">
                10.00
              </p>
            </div>
            <div className="bg-foreground/10 rounded-md flex py-1 text-sm my-auto">
              <p className="font-mono text-sm md:text-base text-center mx-auto tracking-widest">
                10.00
              </p>
            </div>
            <div className="bg-foreground/10 rounded-md flex py-1 text-sm my-auto">
              <p className="font-mono text-sm md:text-base text-center mx-auto tracking-widest">
                10.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStation;
