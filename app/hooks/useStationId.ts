import { useState, useEffect } from "react";
import axios from "axios";
import { StationDetails } from "@/app/types";

// Hook untuk mengambil data stasiun berdasarkan stationId
const useStationId = (stationId: string | null) => {
  const [stationDetails, setStationDetails] = useState<StationDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Cek apakah stationId tersedia
    if (!stationId) {
      setStationDetails(null);
      setLoading(false);
      return;
    }

    const fetchStationDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `/comuline-api/v1/station/${stationId}`
        );
        setStationDetails(response.data); // Sesuaikan dengan struktur data dari respons API
      } catch (err: any) {
        setError(err.message || "Terjadi kesalahan saat memuat data stasiun");
      } finally {
        setLoading(false);
      }
    };

    fetchStationDetails();
  }, [stationId]);

  return { stationDetails, loading, error };
};

export default useStationId;
