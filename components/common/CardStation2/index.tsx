import { IoIosArrowUp } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/state/store";
import { useEffect, useState } from "react";
import { fetchSchedule } from "@/app/state/Reducer/stationSlice";

const CardStation2 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedStation = useSelector((state: RootState) => state.stations.selectedStation);
  const schedule = useSelector((state: RootState) => state.stations.schedule);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (selectedStation) {
      dispatch(fetchSchedule(selectedStation.id));
    }

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // update every minute

    return () => clearInterval(interval);
  }, [dispatch, selectedStation]);

  const formatTime = (date: Date) => {
    return date.toTimeString().slice(0, 5);
  };

  const parseTime = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const now = new Date();
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    return date;
  };

  const getClosestDeparture = (times: string[]) => {
    const now = currentTime;
    let closestTime: Date | null = null;
    let minDiff = Infinity;

    times.forEach((time) => {
      const departureTime = parseTime(time);
      const diff = (departureTime.getTime() - now.getTime()) / 60000; // difference in minutes

      if (diff >= 0 && diff < minDiff) {
        closestTime = departureTime;
        minDiff = diff;
      }
    });

    return closestTime ? formatTime(closestTime) : "";
  };

  const getMinutesUntilDeparture = (times: string[]) => {
    const now = currentTime;
    const diffs = times.map((time) => {
      const departureTime = parseTime(time);
      const diff = (departureTime.getTime() - now.getTime()) / 61000; // difference in minutes
      return diff;
    }).filter((diff) => diff > 0);

    return diffs.length > 0 ? Math.floor(Math.min(...diffs)) : 0; // floor to get integer part only
  };

  // Filter and sort destinations by the closest departure time
  const uniqueDestinations = Array.from(new Set(schedule.map(sch => sch.destination)))
    .map(destination => {
      return schedule.find(sch => sch.destination === destination);
    })
    .filter(Boolean) // Ensure no undefined values
    .sort((a, b) => {
      const aTimes = schedule.filter(sch => sch.destination === a?.destination).map(sch => sch.timeEstimated.slice(0, 5));
      const bTimes = schedule.filter(sch => sch.destination === b?.destination).map(sch => sch.timeEstimated.slice(0, 5));
      return getMinutesUntilDeparture(aTimes) - getMinutesUntilDeparture(bTimes);
    });

  return (
    <div className="w-full border-b border-foreground/50 pb-5">
      {/* NAMA STASIUN */}
      <div className="w-full flex justify-between my-auto mb-8 ">
        <p className="text-foreground/80 font-bold text-xl lg:text-2xl capitalize">
          {selectedStation ? selectedStation.name : "Pilih Stasiun"}
        </p>
        <IoIosArrowUp className="my-auto text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
      </div>

      {/* NEXT STATION */}
      {uniqueDestinations.map((data, index) => {
        const minutesUntilDeparture = getMinutesUntilDeparture(
          schedule.filter((sch) => sch.destination === data?.destination).map((sch) => sch.timeEstimated.slice(0, 5))
        );

        if (minutesUntilDeparture <= 0) {
          return null; // Skip rendering if there are 0 minutes or less
        }

        return (
          <div
            key={index}
            className={`w-full flex flex-col border-l-4 pb-3`}
            style={{ borderColor: data?.color }}
          >
            <div className="flex w-full justify-between">
              <div className="pl-3">
                <p className="text-foreground/80 tracking-widest text-xs">
                  Arah menuju
                </p>
                <p className="text-xl font-semibold font-mono">
                  {data?.destination}
                </p>
              </div>

              {/* keberangkatan */}
              <div className="">
                <p className="text-foreground/80 tracking-widest text-xs text-end">
                  Berangkat pukul
                </p>
                <p className="font-bold text-lg font-mono tracking-widest text-end">
                  {getClosestDeparture(
                    schedule.filter((sch) => sch.destination === data?.destination).map((sch) => sch.timeEstimated.slice(0, 5))
                  )}
                </p>
                <p className="text-foreground/80 tracking-widest text-xs text-end">
                  dalam {minutesUntilDeparture} menit
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardStation2;
