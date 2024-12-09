export interface Station {
  id: string;
  name: string;
}

export interface Schedule {
  id: string;
  station_id: string; // Menjaga konsistensi dengan API
  station_origin_id: string;
  station_destination_id: string;
  train_id: string;
  line: string;
  route: string;
  departs_at: string; // Sesuai dengan API (departs_at)
  arrives_at: string; // Sesuai dengan API (arrives_at)
  metadata: {
    origin: {
      color: string;
    };
  };
  created_at: string; // Sesuai dengan API (created_at)
  updated_at: string; // Sesuai dengan API (updated_at)
}

export interface StationDetails {
  id: string;
  name: string;
}