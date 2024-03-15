import { CiDark } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full lg:w-1/2 mx-auto flex py-5">
      <div className="w-full bg-red-200 flex items-center">
        <p className="text-slate-400 font-semibold font-mono">rute-krl</p>
      </div>
      <div className="w-full flex items-center bg-yellow-200">
        <CiDark className="w-8 h-8 font-bold text-slate-400 hover:text-black cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
