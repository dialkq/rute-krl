import React, { useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/state/store';
import { fetchSchedule } from '@/app/state/Reducer/stationSlice';
import dayjs from 'dayjs';

const CardStation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedStation = useSelector((state: RootState) => state.stations.selectedStation);
  const schedule = useSelector((state: RootState) => state.stations.schedule);

  useEffect(() => {
    if (selectedStation) {
      dispatch(fetchSchedule(selectedStation.id));
    }
  }, [selectedStation, dispatch]);

  // useEffect(() => {
  //   console.log('Schedule data:', schedule);
  // }, [schedule]);
  
  // Get current time in HH:mm format
  const currentTime = new Date();
  const formattedCurrentTime = currentTime.toTimeString().slice(0, 5); // HH:mm
  console.log('Current time:', formattedCurrentTime); // Log current time

  // Function to calculate time difference in minutes
  const calculateTimeDifference = (time1: string, time2: string) => {
    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    const date1 = new Date();
    date1.setHours(hours1, minutes1, 0);

    const date2 = new Date();
    date2.setHours(hours2, minutes2, 0);

    const diffMilliseconds = date2.getTime() - date1.getTime();
    const diffMinutes = Math.round(diffMilliseconds / 60000);

    return diffMinutes;
  };

  // Function to format time from HH:mm:ss to HH:mm
  const formatTime = (time: string) => {
    if (time) {
      const [hours, minutes] = time.split(':');
      return `${hours}:${minutes}`;
    }
    return time;
  };

  return (
    <div className="w-full">
      {/* NAMA STASIUN */}
      <div className="w-full flex justify-between my-auto">
        <p className="text-foreground/80 font-bold text-xl lg:text-2xl capitalize">
          {selectedStation ? selectedStation.name : 'Pilih Stasiun'}
        </p>
        <IoIosArrowUp className="my-auto text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
      </div>

      {/* DATA STASIUN MAPING */}
      {schedule.length > 0 ? (
        schedule.map((item) => {
          const timeEstimated = formatTime(item.timeEstimated); // Format to HH:mm
          const timeDifference = calculateTimeDifference(formattedCurrentTime, timeEstimated);

          return (
            <div
              key={item.id}
              className="w-full flex flex-col my-5 border-l-4"
              style={{ borderColor: item.color }}
            >
              <div className="flex w-full justify-between">
                <div className="pl-3">
                  <p className="text-foreground/80 tracking-widest text-xs">
                    Arah menuju
                  </p>
                  <p className="text-xl font-semibold font-mono">
                    {item.destination}
                  </p>
                </div>
                <div className="">
                  <p className="text-foreground/80 tracking-widest text-xs text-end">
                    Berangkat pukul
                  </p>
                  <p className="font-bold text-lg font-mono tracking-widest text-end">
                    {timeEstimated}
                  </p>
                  <p className="text-foreground/80 tracking-widest text-xs text-end">
                    {timeDifference !== null ? `dalam ${timeDifference} menit` : 'Invalid time'}
                  </p>
                </div>
              </div>

              {/* NEXT SCHEDULE TIME */}
              <div className="flex flex-col w-full">
                <div className="w-full flex justify-between py-3 my-auto">
                  <p className="pl-3 text-foreground/80 tracking-widest text-xs">
                    Jam berikutnya:
                  </p>
                  <IoIosArrowUp className="my-auto text-xs text-foreground/50 hover:text-foreground/100 cursor-pointer font-bold" />
                </div>

                {/* CARD SEMUA JADWAL */}
                <div className="ml-3 grid grid-cols-4 gap-3 md:grid-cols-5 border-b pb-5 border-foreground/50">
                  <div className="bg-foreground/10 rounded-md flex py-1 text-sm my-auto">
                    <p className="font-mono text-sm md:text-base text-center mx-auto tracking-widest">
                      10.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-foreground/80 text-center mt-20">No schedules available</p>
      )}
    </div>
  );
};

export default CardStation;
