"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Select from "react-select";
import { IoMdAdd } from "react-icons/io";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/state/store";
import { selectStation, setStations } from "@/app/state/Reducer/stationSlice";
import useStations from "@/app/hooks/useStation";
import { useEffect } from "react";

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

export function AddStation() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: stations, isLoading, error } = useStations();
  const selectedStation = useSelector((state: RootState) => state.stations.selectedStation);

  // Effect to set stations in Redux store and log data
  useEffect(() => {
    if (stations) {
      console.log("Stations fetched:", stations); // Log fetched stations
      dispatch(setStations(stations));
    }
  }, [stations, dispatch]);

  // MAPING OPTIONS FOR SELECT
  const stationOptions = stations?.map((station: any) => ({
    value: station.id,
    label: station.name,
  })) || [];

  // HANDLE SELECTED OPTION FOR STATE
  const handleChange = (option: any) => {
    const selected = stations.find((station: any) => station.id === option.value);
    console.log("Selected station:", selected);
    dispatch(selectStation(selected || null));
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <IoMdAdd className="w-5 h-5 font-bold text-foreground/40 my-auto cursor-pointer hover:text-foreground/90" />
      </DialogTrigger>
      <DialogContent className="w-11/12 md:w-full dark:bg-black rounded-lg fixed left-[50%] top-[20%]">
        <DialogDescription>Pilih Stasiun</DialogDescription>
        <Select
          styles={customStyles}
          options={stationOptions}
          onChange={handleChange}
          value={
            selectedStation
              ? { value: selectedStation.id, label: selectedStation.name }
              : null
          }
          className="my-1 text-foreground/80 font-bold"
        />
      </DialogContent>
    </Dialog>
  );
}