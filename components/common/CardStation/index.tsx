"use client";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";
import { Station } from "@/app/types";
import stationNameMap from "@/components/common/CardStation/stationNameMap";
import useSchedule from "@/app/hooks/useSchedule";
import Loading from "./loading";

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

  const calculateTimeDifferenceInMinutes = (departsAt: string): number => {
    if (!departsAt) return -1;
    try {
      const [date, time] = departsAt.split(" ");
      const [hours, minutes] = time.split(":").map(Number);
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

  const formatTime = (departsAt: string): string => {
    if (!departsAt) return "";
    const [date, time] = departsAt.split(" ");
    const [hours, minutes] = time.split(":");
    return `${hours}:${minutes}`;
  };

  const formatTimeDifference = (minutes: number): string => {
    if (minutes < 0) return "Telah Berangkat";
    if (minutes === 0) return "Sekarang";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours > 0) {
      return `${hours} jam ${remainingMinutes} menit lagi`;
    }
    return `${remainingMinutes} menit lagi`;
  };

  const filteredSchedule = schedule.filter((item) => {
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const [date, time] = item.departs_at.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    return (
      hours > currentHours ||
      (hours === currentHours && minutes >= currentMinutes)
    );
  });

  const sortedSchedule = filteredSchedule.sort((a, b) => {
    const [dateA, timeA] = a.departs_at.split(" ");
    const [dateB, timeB] = b.departs_at.split(" ");
    const [hoursA, minutesA] = timeA.split(":").map(Number);
    const [hoursB, minutesB] = timeB.split(":").map(Number);
    return hoursA * 60 + minutesA - (hoursB * 60 + minutesB);
  });

  const uniqueStations = Array.from(
    new Set(sortedSchedule.map((item) => item.station_destination_id))
  )
    .map((stationId) =>
      sortedSchedule.find((item) => item.station_destination_id === stationId)
    )
    .filter((item): item is (typeof sortedSchedule)[number] => !!item);

  const toggleScheduleVisibility = (stationId: string) => {
    setScheduleVisibility((prevState) => ({
      ...prevState,
      [stationId]: !prevState[stationId],
    }));
  };

  const formatStationName = (name: string): string => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const StationNameDisplay = ({
    loading,
    stationId,
  }: {
    loading: boolean;
    stationId: string;
  }) => {
    return (
      <p className="text-lg md:text-xl font-semibold font-mono mt-1 text-foreground/90">
        {loading ? (
          <Loading />
        ) : stationNameMap[stationId] ? (
          formatStationName(stationNameMap[stationId])
        ) : (
          "Tidak ada data"
        )}
      </p>
    );
  };

  return (
    <div className="w-full border-b border-foreground/20 pb-3">
      <div className="w-full flex justify-between my-auto mb-4 lg:mb-5 tracking-wider">
        <p className="text-foreground/80 font-bold text-2xl lg:text-3xl capitalize">
          {selectedStation
            ? formatStationName(selectedStation.name)
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
          <div className="space-y-0">
            {uniqueStations.map((item, index) => {
              const stationId = item.station_destination_id;

              const subsequentDepartures = sortedSchedule
                .filter(
                  (scheduleItem) =>
                    scheduleItem.station_destination_id === stationId
                )
                .map((scheduleItem) => formatTime(scheduleItem.departs_at));

              return (
                <div
                  key={index}
                  className="w-full flex flex-col border-l-4 pb-3"
                  style={{
                    borderColor: item?.metadata.origin.color || "green",
                  }}
                >
                  <div className="flex w-full justify-between">
                    <div className="pl-2 md:pl-3">
                      <p className="text-foreground/50 text-xs">Arah menuju</p>
                      <StationNameDisplay
                        loading={loading}
                        stationId={stationId}
                      />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-foreground/50 text-xs text-end">
                        Berangkat pukul
                      </p>
                      <p className="font-bold text-base md:text-lg font-mono tracking-widest text-end mt-1">
                        {formatTime(item.departs_at)}
                      </p>

                      <p className="text-foreground/50 text-xs text-end">
                        {formatTimeDifference(
                          calculateTimeDifferenceInMinutes(item.departs_at)
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col w-full">
                    <div
                      className="w-full flex justify-between pt-3 pb-2 my-auto cursor-pointer"
                      onClick={() =>
                        toggleScheduleVisibility(item.station_destination_id)
                      }
                    >
                      <p className="pl-2 md:pl-3 text-foreground/50 hover:underline text-xs transition-all ease-in-out ">
                        Lihat jadwal tersedia
                      </p>
                      {scheduleVisibility[item.station_destination_id] ? (
                        <IoIosArrowDown className="my-auto text-xs text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
                      ) : (
                        <IoIosArrowUp className="my-auto text-xs text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
                      )}
                    </div>

                    <div className="ml-2 md:ml-3 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 border-b pb-3 border-foreground/20 my-2">
                      {scheduleVisibility[stationId] &&
                        subsequentDepartures.map((time, idx) => (
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
          </div>
        ) : (
          <div className="w-full">
            <p className="text-foreground/50 font-bold text-center mt-10">
              Jadwal hari ini telah habis, kembali lagi besok
            </p>
          </div>
        ))}
    </div>
  );
};

export default CardStation;
