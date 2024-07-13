import { useQuery } from 'react-query';
import axios from 'axios';
import { Schedule } from '@/app/types';

const fetchSchedule = async (stationId: string): Promise<Schedule[]> => {
  const { data } = await axios.get(`/api/v1/schedule/${stationId}`);
  return data.data;
};

const useSchedule = (stationId: string) => {
  return useQuery<Schedule[]>(['schedule', stationId], () => fetchSchedule(stationId), {
    enabled: !!stationId, // Hanya aktif ketika stationId tersedia
  });
};

export default useSchedule;
