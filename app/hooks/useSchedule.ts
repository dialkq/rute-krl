import { useState, useEffect } from "react";
import axios from "axios";
import { Schedule } from "@/app/types"; // Import interface dari type.ts

const useSchedule = (stationId: string | null) => {
  const [schedule, setSchedule] = useState<Schedule[]>([]);
  const [destinationId, setDestinationId] = useState<string | null>(null); // State untuk station_destination_id
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!stationId) return;

    const fetchSchedule = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/comuline-api/v1/schedule/${stationId}`);
        const data: Schedule[] = response.data.data;
        setSchedule(data);

        // Ambil station_destination_id dari jadwal pertama
        if (data.length > 0) {
          setDestinationId(data[0].station_destination_id);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch schedule");
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [stationId]);

  return { schedule, destinationId, loading, error };
};

export default useSchedule;