import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Select, { ActionMeta, SingleValue } from "react-select";
import { IoMdAdd } from "react-icons/io";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import axios from "axios";

// STYLE SELECT OPTION
const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "foreground/20",
    color: "foreground/80",
    border: state.isFocused ? "none" : "1px solid foreground/80",
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
  }),
  menu: (provided: any) => ({
    ...provided,
    color: "foreground/80",
  }),
  option: (provided: any) => ({
    ...provided,
    color: "black",
    backgroundColor: "foreground/20",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "foreground/80",
  }),
};

type Station = {
  id: string;
  name: string;
};

export function AddStation() {
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<{ value: string; label: string } | null>(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get("/api/v1/station");
        const fetchedStations: Station[] = response.data.data;

        setStations(fetchedStations);
      } catch (error) {
        console.error("Error fetching stations:", error);
      }
    };

    fetchStations();
  }, []);
  
  // console state
  // const handleStationChange = (newValue: SingleValue<{ value: string; label: string }>, actionMeta: ActionMeta<{ value: string; label: string }>) => {
  //   if (newValue) {
  //     setSelectedStation(newValue);
  //     console.log('Selected station label:', newValue.label);
  //   }
  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IoMdAdd className="w-5 h-5 font-bold text-foreground/40 my-auto cursor-pointer hover:text-foreground/90" />
      </DialogTrigger>
      <DialogContent className="w-11/12 md:w-full dark:bg-black rounded-lg">
        <DialogDescription>Pilih Stasiun</DialogDescription>
        <Select
          styles={customStyles}
          options={stations.map((station) => ({
            value: station.id,
            label: station.name,
          }))}
          className="my-1 text-foreground/80 font-bold"
          value={selectedStation}
          // onChange={handleStationChange}
        />
      </DialogContent>
    </Dialog>
  );
}