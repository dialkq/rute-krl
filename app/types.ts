export interface Station {
  id: string;
  name: string;
  group_wil: number;
  fg_enable: number;
}

export interface Schedule {
  train_id: string;
  ka_name: string;
  route_name: string;
  dest: string;
  time_est: string;
  color: string;
  dest_time: string;
}


export interface StationDetails {
  id: string;
  name: string;
  group_wil: number;
  fg_enable: number;
}