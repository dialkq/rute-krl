"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Select from "react-select";
import { IoMdAdd } from "react-icons/io";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/state/store";
import { fetchStations, selectStation } from "@/app/state/Reducer/stationSlice";
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
  const stations = useSelector((state: RootState) => state.stations.stations);
  const selectedStation = useSelector((state: RootState) => state.stations.selectedStation);

  // console debug
  useEffect(() => {
    console.log('Selected station:', selectedStation);
  }, [selectedStation]);

  useEffect(() => {
    dispatch(fetchStations());
  }, [dispatch]);

  // maping options for select
  const stationOptions = stations.map((station: any) => ({
    value: station.id,
    label: station.name,
  }));

  const handleChange = (option: any) => {
    const selected = stations.find((station: any) => station.id === option.value);
    console.log('Selected option:', selected);
    dispatch(selectStation(selected || null));
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <IoMdAdd className="w-5 h-5 font-bold text-foreground/40 my-auto cursor-pointer hover:text-foreground/90" />
      </DialogTrigger>
      <DialogContent className="w-11/12 md:w-full dark:bg-black rounded-lg">
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
