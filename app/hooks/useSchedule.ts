import { useState, useEffect } from "react";
import axios from "axios";

interface Schedule {
  train_id: string;
  ka_name: string;
  route_name: string;
  dest: string;
  time_est: string;
  color: string;
  dest_time: string;
}

const useSchedule = (stationId: string | null) => {
  const [schedule, setSchedule] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!stationId) return;

    const fetchSchedule = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/schedule/${stationId}`);
        setSchedule(response.data.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch schedule");
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [stationId]);

  return { schedule, loading, error };
};

export default useSchedule;