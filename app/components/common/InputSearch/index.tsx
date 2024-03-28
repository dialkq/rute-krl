import { Input } from "../../ui/input";
import { useState } from "react";
import station from "../../../api/station";
const InputSearch = () => {
  const [stations, setStations] = useState(station);

  return (
    <div className="w-full">
      <Input
        placeholder="Cari Stasiun"
        className="placeholder:text-slate-400 md:mr-3 rounded-lg font-mono border-2 border-slate-200 focus:border-none w-full md:w-52 lg:w-60"
        onFocus={() => {}}
      />
      <div>
        <ul>
          {stations.map((station) => (
            <li key={station.id}>{station.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputSearch;
