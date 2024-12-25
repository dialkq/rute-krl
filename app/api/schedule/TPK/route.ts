import { NextResponse } from "next/server";

const TPK = [
  {
    train_id: "2401A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "06:20:00",
    color: "#DD0067",
    dest_time: "06:36:00",
  },
  {
    train_id: "2403A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "06:40:00",
    color: "#DD0067",
    dest_time: "06:56:00",
  },
  {
    train_id: "2405A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "07:00:00",
    color: "#DD0067",
    dest_time: "07:16:00",
  },
  {
    train_id: "2407A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "07:20:00",
    color: "#DD0067",
    dest_time: "07:36:00",
  },
  {
    train_id: "2409A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "07:40:00",
    color: "#DD0067",
    dest_time: "07:56:00",
  },
  {
    train_id: "2411A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "08:00:00",
    color: "#DD0067",
    dest_time: "08:16:00",
  },
  {
    train_id: "2413A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "08:20:00",
    color: "#DD0067",
    dest_time: "08:36:00",
  },
  {
    train_id: "2415A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "08:40:00",
    color: "#DD0067",
    dest_time: "08:56:00",
  },
  {
    train_id: "2417A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "09:00:00",
    color: "#DD0067",
    dest_time: "09:16:00",
  },
  {
    train_id: "2419A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "09:20:00",
    color: "#DD0067",
    dest_time: "09:36:00",
  },
  {
    train_id: "2421A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "09:40:00",
    color: "#DD0067",
    dest_time: "09:56:00",
  },
  {
    train_id: "2423A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "10:00:00",
    color: "#DD0067",
    dest_time: "10:16:00",
  },
  {
    train_id: "2425A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "10:20:00",
    color: "#DD0067",
    dest_time: "10:36:00",
  },
  {
    train_id: "2427A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "10:40:00",
    color: "#DD0067",
    dest_time: "10:56:00",
  },
  {
    train_id: "2429A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "11:00:00",
    color: "#DD0067",
    dest_time: "11:16:00",
  },
  {
    train_id: "2431A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "11:20:00",
    color: "#DD0067",
    dest_time: "11:36:00",
  },
  {
    train_id: "2433A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "11:40:00",
    color: "#DD0067",
    dest_time: "11:56:00",
  },
  {
    train_id: "2491B",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "12:00:00",
    color: "#DD0067",
    dest_time: "12:16:00",
  },
  {
    train_id: "2439A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "12:40:00",
    color: "#DD0067",
    dest_time: "12:56:00",
  },
  {
    train_id: "2443A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "13:20:00",
    color: "#DD0067",
    dest_time: "13:36:00",
  },
  {
    train_id: "2445A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "13:40:00",
    color: "#DD0067",
    dest_time: "13:56:00",
  },
  {
    train_id: "2437B",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "14:00:00",
    color: "#DD0067",
    dest_time: "14:16:00",
  },
  {
    train_id: "2449A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "14:20:00",
    color: "#DD0067",
    dest_time: "14:36:00",
  },
  {
    train_id: "2451A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "14:40:00",
    color: "#DD0067",
    dest_time: "14:56:00",
  },
  {
    train_id: "2495B",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "15:00:00",
    color: "#DD0067",
    dest_time: "15:16:00",
  },
  {
    train_id: "2455A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "15:20:00",
    color: "#DD0067",
    dest_time: "15:36:00",
  },
  {
    train_id: "2457A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "15:40:00",
    color: "#DD0067",
    dest_time: "15:56:00",
  },
  {
    train_id: "2497B",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "16:00:00",
    color: "#DD0067",
    dest_time: "16:16:00",
  },
  {
    train_id: "2461A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "16:20:00",
    color: "#DD0067",
    dest_time: "16:36:00",
  },
  {
    train_id: "2463A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "16:40:00",
    color: "#DD0067",
    dest_time: "16:56:00",
  },
  {
    train_id: "2465A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "17:00:00",
    color: "#DD0067",
    dest_time: "17:16:00",
  },
  {
    train_id: "2467A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "17:20:00",
    color: "#DD0067",
    dest_time: "17:36:00",
  },
  {
    train_id: "2469A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "17:40:00",
    color: "#DD0067",
    dest_time: "17:56:00",
  },
  {
    train_id: "2471A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "18:00:00",
    color: "#DD0067",
    dest_time: "18:16:00",
  },
  {
    train_id: "2473A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "18:20:00",
    color: "#DD0067",
    dest_time: "18:36:00",
  },
  {
    train_id: "2475A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "18:40:00",
    color: "#DD0067",
    dest_time: "18:56:00",
  },
  {
    train_id: "2477A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "19:00:00",
    color: "#DD0067",
    dest_time: "19:16:00",
  },
  {
    train_id: "2479A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "19:20:00",
    color: "#DD0067",
    dest_time: "19:36:00",
  },
  {
    train_id: "2481A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "19:40:00",
    color: "#DD0067",
    dest_time: "19:56:00",
  },
  {
    train_id: "2483A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "20:00:00",
    color: "#DD0067",
    dest_time: "20:16:00",
  },
  {
    train_id: "2485A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "20:20:00",
    color: "#DD0067",
    dest_time: "20:36:00",
  },
  {
    train_id: "2487A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "20:40:00",
    color: "#DD0067",
    dest_time: "20:56:00",
  },
  {
    train_id: "2489A",
    ka_name: "COMMUTER LINE TANJUNGPRIUK",
    route_name: "TANJUNGPRIUK-JAKARTAKOTA",
    dest: "JAKARTAKOTA",
    time_est: "21:00:00",
    color: "#DD0067",
    dest_time: "21:16:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: TPK,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
