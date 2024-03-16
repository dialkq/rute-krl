import CardNextSchedule from "@/components/CardNextSchedule";

const CardRute = () => {
  return (
    <div className="flex flex-col w-full mx-auto justify-between">
      {/* NEXT STATION */}
      <div className="flex w-full justify-between mt-3">
        <div className="pl-3">
          <p className="text-slate-500 tracking-widest text-xs">Arah menuju</p>
          <p className="text-xl text-black font-semibold font-mono">Angke</p>
        </div>
        <div className="">
          <p className="text-slate-500 tracking-widest text-xs text-end">
            Berangkat pukul
          </p>
          <p className="text-black font-bold text-lg font-mono tracking-widest text-end">
            15.10
          </p>
          <p className="text-slate-500 tracking-widest text-xs text-end">
            dalam 2 menit
          </p>
        </div>
      </div>

      {/* NEXT SCHEDULE TIME */}
      <div className="flex flex-col w-full">
        <p className="pl-3 mt-5 text-slate-500 tracking-widest text-xs">
          Jam berikutnya:
        </p>
        <div className="flex justify-between pl-3">
          <CardNextSchedule />
          <CardNextSchedule />
          <CardNextSchedule />
        </div>
        {/* behavior look like hr tag */}
        <p className="ml-3 border-b border-b-slate-500 mt-10"></p>
      </div>
    </div>
  );
};

export default CardRute;