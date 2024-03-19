"use client";
import Navbar from "./components/common/Navbar";
import CardStation from "./components/common/CardStation";
import { QueryClientProvider, QueryClient } from "react-query";

export default function Home() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="relative">
        <div className="w-11/12 md:w-4/6 lg:w-5/12 mx-auto sticky top-0 bg-background dark:bg-background">
          <Navbar />
        </div>
        <div className="w-11/12 md:w-4/6 lg:w-5/12 mx-auto">
          <CardStation />
        </div>
      </div>
    </QueryClientProvider>
  );
}
