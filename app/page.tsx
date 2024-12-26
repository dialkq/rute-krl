"use client";

import Navbar from "@/components/common/Navbar";
import CardStation from "@/components/common/CardStation";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Footer from "@/components/common/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="w-11/12 md:w-1/2 lg:w-1/3 mx-auto">
          <div className="sticky top-0 dark:bg-stone-900 bg-white">
            <Navbar />
          </div>
          <div className="my-3 md:my-4 lg:my-5">
            <CardStation />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
