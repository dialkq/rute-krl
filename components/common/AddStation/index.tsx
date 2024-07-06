import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Select from "react-select";
import { IoMdAdd } from "react-icons/io";
import { DialogDescription } from "@radix-ui/react-dialog";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "strawberry", label: "Strawberry" },
  { value: "strawberry", label: "Strawberry" },
  { value: "strawberry", label: "Strawberry" },
  { value: "strawberry", label: "Strawberry" },
  { value: "strawberry", label: "Strawberry" },
  { value: "strawberry", label: "Strawberry" },
  { value: "strawberry", label: "Strawberry" },
];
export function AddStation() {
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IoMdAdd className="w-5 h-5 font-bold text-foreground/40 my-auto cursor-pointer hover:text-foreground/90" />
      </DialogTrigger>
      <DialogContent className="w-11/12 md:w-full dark:bg-black rounded-lg">
        <DialogDescription>Pilih Stasiun</DialogDescription>
        <Select
          styles={customStyles}
          options={options}
          className="my-1 text-foreground/80 font-bold"
        />
      </DialogContent>
    </Dialog>
  );
}