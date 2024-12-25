"use client";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";
import { Station } from "@/app/types";
import useSchedule from "@/app/hooks/useSchedule";
import Loading from "./loading";

// Fungsi untuk memformat nama menjadi huruf kapital di awal kata
const capitalizeWords = (str: string): string => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const CardStation = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [scheduleVisibility, setScheduleVisibility] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentTime, setCurrentTime] = useState(new Date());

  const selectedStation: Station | null = useSelector(
    (state: RootState) => state.stations.selectedStation
  );

  const { schedule, loading } = useSchedule(selectedStation?.id || null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every 1 minute
    return () => clearInterval(timer);
  }, []);

  const calculateTimeDifferenceInMinutes = (timeEst: string): number => {
    try {
      const [hours, minutes] = timeEst.split(":").map(Number);
      const departureTotalMinutes = hours * 60 + minutes;
      const currentHours = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();
      const currentTotalMinutes = currentHours * 60 + currentMinutes;
      return departureTotalMinutes - currentTotalMinutes;
    } catch (error) {
      console.error("Error calculating time difference:", error);
      return -1;
    }
  };

  const formatTime = (timeEst: string): string => {
    try {
      const [hours, minutes] = timeEst.split(":");
      return `${hours}:${minutes}`;
    } catch (error) {
      console.error("Error formatting time:", error);
      return "";
    }
  };

  const formatTimeDifference = (minutes: number): string => {
    if (minutes < 0) return "Telah Berangkat";
    if (minutes === 0) return "Sekarang";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours > 0) {
      return `${hours} jam ${remainingMinutes} menit`;
    }
    return `${remainingMinutes} menit`;
  };

  const filteredSchedule = schedule.filter((item) => {
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const [hours, minutes] = item?.time_est
      ? item.time_est.split(":").map(Number)
      : [0, 0];

    return (
      hours > currentHours ||
      (hours === currentHours && minutes >= currentMinutes)
    );
  });

  const sortedSchedule = filteredSchedule.sort((a, b) => {
    const [hoursA, minutesA] = a.time_est.split(":").map(Number);
    const [hoursB, minutesB] = b.time_est.split(":").map(Number);
    return hoursA * 60 + minutesA - (hoursB * 60 + minutesB);
  });

  const uniqueStations = Array.from(
    new Set(sortedSchedule.map((item) => item.dest))
  )
    .map((dest) => sortedSchedule.find((item) => item.dest === dest))
    .filter((item): item is (typeof sortedSchedule)[number] => !!item);

  const toggleScheduleVisibility = (dest: string) => {
    setScheduleVisibility((prevState) => ({
      ...prevState,
      [dest]: !prevState[dest],
    }));
  };

  return (
    <div className="w-full border-b border-foreground/20 pb-3">
      <div className="w-full flex justify-between my-auto mb-4 lg:mb-5 tracking-wider">
        <p className="text-foreground/80 font-bold text-2xl lg:text-3xl">
          {selectedStation
            ? capitalizeWords(selectedStation.name)
            : "Pilih Stasiun"}
        </p>
        {isMainVisible ? (
          <IoIosArrowUp
            className="my-auto text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold"
            onClick={() => setIsMainVisible(false)}
          />
        ) : (
          <IoIosArrowDown
            className="my-auto text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold"
            onClick={() => setIsMainVisible(true)}
          />
        )}
      </div>

      {isMainVisible &&
        (uniqueStations.length > 0 ? (
          <>
            {uniqueStations.map((item, index) => {
              const dest = item.dest;

              const subsequentDepartures = sortedSchedule
                .filter((scheduleItem) => scheduleItem.dest === dest)
                .map((scheduleItem) => formatTime(scheduleItem.time_est));

              return (
                <div
                  key={index}
                  className="w-full flex flex-col border-l-4 pb-3"
                  style={{
                    borderColor: item.color || "green",
                  }}
                >
                  <div className="flex w-full justify-between">
                    <div className="pl-2 md:pl-3">
                      <p className="text-foreground/50 text-xs font-mono tracking-tight">
                        Arah menuju
                      </p>
                      <p className="text-lg md:text-xl font-semibold font-mono mt-1 text-foreground/90">
                        {loading ? (
                          <Loading />
                        ) : (
                          capitalizeWords(dest) || "Belum ada data stasiun"
                        )}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-foreground/50 text-xs text-end font-mono">
                        Berangkat pukul
                      </p>
                      <p className="font-bold text-base md:text-lg font-mono tracking-widest text-end mt-1">
                        {formatTime(item.time_est)}
                      </p>

                      <p className="text-foreground/50 text-xs text-end font-mono">
                        {formatTimeDifference(
                          calculateTimeDifferenceInMinutes(item.time_est)
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col w-full my-3">
                    <div
                      className="w-full flex justify-between my-auto cursor-pointer"
                      onClick={() => toggleScheduleVisibility(dest)}
                    >
                      <p className="font-mono ml-2 md:ml-3 text-foreground/50 hover:underline hover:text-foreground/100 text-xs transition-all ease-in-out tracking-tight">
                        Lihat jadwal berikutnya:
                      </p>
                      {scheduleVisibility[dest] ? (
                        <IoIosArrowDown className="my-auto text-xs text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
                      ) : (
                        <IoIosArrowUp className="my-auto text-xs text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
                      )}
                    </div>

                    <div className="ml-2 md:ml-3 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 border-b border-foreground/20 py-1.5 mb-1.5 font-mono">
                      {scheduleVisibility[dest] &&
                        subsequentDepartures.slice(1).map((time, idx) => (
                          <div
                            key={idx}
                            className="bg-foreground/10 rounded-md flex py-1 text-sm my-auto"
                          >
                            <p className="mx-auto font-semibold text-foreground/80 text-mono text-sm lg:text-base">
                              {time}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="w-full">
            <p className="text-foreground/50 font-bold text-center mt-10">
              Memuat stasiun...
            </p>
          </div>
        ))}
    </div>
  );
};

export default CardStation;
