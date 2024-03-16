import CardStation from "@/components/common/CardStation";
import Navbar from "../components/common/Navbar";

export default function Home() {
  return (
    <div>
      <div className="w-11/12 md:w-4/6 lg:w-5/12 mx-auto">
        <Navbar />
      </div>
      <div className="w-11/12 md:w-4/6 lg:w-5/12 mx-auto mt-10 md:mt-8 lg:mt-10">
        <CardStation />
      </div>
    </div>
  );
}
