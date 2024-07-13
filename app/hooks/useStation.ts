import { useQuery } from 'react-query';
import axios from 'axios';

const fetchStations = async () => {
  const response = await axios.get('/api/v1/station');
  return response.data.data;
};

const useStations = () => {
  return useQuery('stations', fetchStations);
};

export default useStations;