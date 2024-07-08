"use client";

import Navbar from "@/components/common/Navbar";
import CardStation from "@/components/common/CardStation";
import { Provider } from "react-redux";
import { store } from "./state/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-11/12 md:w-3/5 lg:w-1/2 mx-auto">
        <div className="">
          <Navbar />
        </div>
        <div className="my-5 md:my-6 lg:my-7 ">
          <CardStation />
        </div>
      </div>
    </Provider>
  );
}