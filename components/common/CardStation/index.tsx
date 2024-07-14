import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/state/store";
import { useEffect, useState } from "react";
import useStations from "@/app/hooks/useStation";
import useSchedule from "@/app/hooks/usesSchedule";
import { Schedule } from "@/app/types";

const CardStation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedStation = useSelector(
    (state: RootState) => state.stations.selectedStation
  );
  const { data: stations } = useStations();
  const {
    data: schedule,
    isLoading,
    error,
  } = useSchedule(selectedStation ? selectedStation.id : "");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visibleSchedules, setVisibleSchedules] = useState<{
    [key: string]: boolean;
  }>({});
  const [isMainVisible, setIsMainVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // HANDLE LOADING/ERROR
  if (isLoading) {
    return <p className="w-full mx-auto text-center text-lg text-foreground/50 font-bold">Loading...</p>;
  }
  if (error) {
    return (
      <p className="w-full mx-auto text-center text-lg text-foreground/50 font-bold">
        Error showing schedule{" "}
      </p>
    );
  }

  // FORMAT TIME
  const formatTime = (date: Date) => {
    return date.toTimeString().slice(0, 5);
  };

  // PARSE TIME
  const parseTime = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const now = new Date();
    const date = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes
    );
    return date;
  };

  // GET CLOSEST DEPARTURE
  const getClosestDeparture = (times: string[]) => {
    const now = currentTime;
    let closestTime: Date | null = null;
    let minDiff = Infinity;

    times.forEach((time) => {
      const departureTime = parseTime(time);
      const diff = (departureTime.getTime() - now.getTime()) / 60000;

      if (diff >= 0 && diff < minDiff) {
        closestTime = departureTime;
        minDiff = diff;
      }
    });

    return closestTime ? formatTime(closestTime) : "";
  };

  // GET MINUTES UNTIL DEPARTURE
  const getMinutesUntilDeparture = (times: string[]) => {
    const now = currentTime;
    const diffs = times
      .map((time) => {
        const departureTime = parseTime(time);
        const diff = (departureTime.getTime() - now.getTime()) / 60000;
        return diff;
      })
      .filter((diff) => diff > 0);

    return diffs.length > 0 ? Math.floor(Math.min(...diffs)) : 0;
  };

  // FORMAT TIME DIFFERENCE ON TEXT
  const formatTimeDifference = (minutes: number) => {
    if (minutes >= 60) {
      const hours = Math.round(minutes / 60);
      return `dalam ${hours} jam`;
    }
    return `dalam ${minutes} menit`;
  };

  // GET SUBSEQUENT DEPARTURES
  const getSubsequentDepartures = (times: string[], count: number) => {
    const now = currentTime;
    const diffs = times
      .map((time) => {
        const departureTime = parseTime(time);
        const diff = (departureTime.getTime() - now.getTime()) / 60000;
        return { time: formatTime(departureTime), diff };
      })
      .filter((obj) => obj.diff > 0)
      .sort((a, b) => a.diff - b.diff);

    return diffs.slice(count).map((obj) => obj.time);
  };

  const toggleVisibility = (destination: string) => {
    setVisibleSchedules((prevState) => ({
      ...prevState,
      [destination]: !prevState[destination],
    }));
  };

  const toggleMainVisibility = () => {
    setIsMainVisible((prev) => !prev);
  };

  // ONLY SHOW SCHEDULES THAT ARE HAVE THE DATA
  const shouldRenderStationCard = (times: string[]) => {
    const closestDeparture = getClosestDeparture(times);
    return closestDeparture !== "";
  };

  // TEXT CAPITALIZE FIRST LETTER ONLY
  const capitalizeFirstLetter = (text: string) => {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  // CHECK IF THERE ARE AVAILABLE SCHEDULES
  const hasAvailableSchedules = (schedules: Schedule[]) => {
    return schedules.some(
      (sch) => getMinutesUntilDeparture([sch.timeEstimated.slice(0, 5)]) > 0
    );
  };

  // UNIQUE DESTINATIONS
  const uniqueDestinations = Array.from(
    new Set(schedule?.map((sch: Schedule) => sch.destination))
  )
    .map((destination) => {
      return schedule?.find((sch: Schedule) => sch.destination === destination);
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aTimes =
        schedule
          ?.filter((sch: Schedule) => sch.destination === a?.destination)
          .map((sch: Schedule) => sch.timeEstimated.slice(0, 5)) ?? [];
      const bTimes =
        schedule
          ?.filter((sch: Schedule) => sch.destination === b?.destination)
          .map((sch: Schedule) => sch.timeEstimated.slice(0, 5)) ?? [];
      return (
        getMinutesUntilDeparture(aTimes) - getMinutesUntilDeparture(bTimes)
      );
    });

  const availableDestinations = uniqueDestinations.filter((data) => {
    const times =
      schedule
        ?.filter((sch) => sch.destination === data?.destination)
        .map((sch) => sch.timeEstimated.slice(0, 5)) ?? [];
    return shouldRenderStationCard(times);
  });

  const hasSchedules = hasAvailableSchedules(schedule ?? []);

  return (
    // NAMA STASIUN
    <div className="w-full border-b border-foreground/20 pb-3">
      <div className="w-full flex justify-between my-auto mb-3">
        <p className="text-foreground/80 font-bold text-xl lg:text-2xl capitalize">
          {selectedStation ? selectedStation.name : "Pilih Stasiun"}
        </p>
        {isMainVisible ? (
          <IoIosArrowUp
            className="my-auto text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold"
            onClick={toggleMainVisibility}
          />
        ) : (
          <IoIosArrowDown
            className="my-auto text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold"
            onClick={toggleMainVisibility}
          />
        )}
      </div>

      {/*  MAPING CARD STATION  */}
{isMainVisible && (
  hasSchedules ? (
    availableDestinations.map((data, index) => {
      const times = schedule
        ?.filter((sch) => sch.destination === data?.destination)
        .map((sch) => sch.timeEstimated.slice(0, 5)) ?? [];
      const subsequentDepartures = getSubsequentDepartures(times, 1);
      const minutesUntilDeparture = getMinutesUntilDeparture(times);

      const destination = data?.destination ?? "";

      return (
        <div
          key={index}
          className={`w-full flex flex-col border-l-4 pb-3`}
          style={{ borderColor: data?.color }}
        >
          {/* ARAH MENUJU */}
          <div className="flex w-full justify-between">
            <div className="pl-2 md:pl-3">
              <p className="text-foreground/50 text-xs">Arah menuju</p>
              <p className="text-lg md:text-xl font-semibold font-mono mt-1 text-foreground/90">
                {capitalizeFirstLetter(destination)}
              </p>
            </div>
            {/* JADWAL KEBERANGKATAN */}
            <div className="flex flex-col">
              <p className="text-foreground/50 text-xs text-end ">
                Berangkat pukul
              </p>
              <p className="font-bold text-base md:text-lg font-mono tracking-widest text-end mt-1">
                {getClosestDeparture(times)}
              </p>
              <p className="text-foreground/50 text-xs text-end">
                {minutesUntilDeparture > 0
                  ? formatTimeDifference(minutesUntilDeparture)
                  : "sudah tiba"}
              </p>
            </div>
          </div>

          {/* SCHEDULE READY */}
          <div className="flex flex-col w-full">
            <div
              className="w-full flex justify-between pt-3 pb-2 my-auto cursor-pointer"
              onClick={() => toggleVisibility(destination)}
            >
              <p className="pl-2 md:pl-3 text-foreground/50 hover:underline text-xs transition-all ease-in-out">
                Lihat jadwal tersedia
              </p>
              {visibleSchedules[destination] ? (
                <IoIosArrowUp className="my-auto text-xs text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
              ) : (
                <IoIosArrowDown className="my-auto text-xs text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
              )}
            </div>
            {/* SHOW ALL SCHEDULE */}
            <div className="ml-2 md:ml-3 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 border-b pb-2 border-foreground/20">
              {visibleSchedules[destination] &&
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
    })
  ) : (
    <div className="w-full">
      <p className="text-foreground/50 font-bold text-center mt-10">
        Jadwal hari ini telah habis, kembali lagi besok
      </p>
    </div>
  )
)}

    </div>
  );
};

export default CardStation;
