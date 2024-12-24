import { useQuery } from "react-query";
import axios from "axios";

const fetchStations = async () => {
  const response = await axios.get("/api/station");
  const stations = response.data.data;

  // Sort stations by name (ascending order)
  return stations.sort((a: { name: string }, b: { name: string }) =>
    a.name.localeCompare(b.name)
  );
};

const useStations = () => {
  return useQuery("stations", fetchStations);
};

export default useStations;