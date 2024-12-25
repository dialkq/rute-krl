import { NextResponse } from "next/server";

const PL = [
  {
    train_id: "661",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "04:55:00",
    color: "#E30A16",
    dest_time: "06:15:00",
  },
  {
    train_id: "669A",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "06:08:00",
    color: "#E30A16",
    dest_time: "07:27:00",
  },
  {
    train_id: "677",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "07:15:00",
    color: "#E30A16",
    dest_time: "08:39:00",
  },
  {
    train_id: "663",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "08:50:00",
    color: "#E30A16",
    dest_time: "10:16:00",
  },
  {
    train_id: "685F",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "09:10:00",
    color: "#E30A16",
    dest_time: "10:41:00",
  },
  {
    train_id: "671A",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "10:26:00",
    color: "#E30A16",
    dest_time: "11:47:00",
  },
  {
    train_id: "679",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "11:20:00",
    color: "#E30A16",
    dest_time: "12:41:00",
  },
  {
    train_id: "687F",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "12:35:00",
    color: "#E30A16",
    dest_time: "14:11:00",
  },
  {
    train_id: "673",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "13:40:00",
    color: "#E30A16",
    dest_time: "15:05:00",
  },
  {
    train_id: "681",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "14:50:00",
    color: "#E30A16",
    dest_time: "16:16:00",
  },
  {
    train_id: "667",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "16:10:00",
    color: "#E30A16",
    dest_time: "17:32:00",
  },
  {
    train_id: "675",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "17:05:00",
    color: "#E30A16",
    dest_time: "18:28:00",
  },
  {
    train_id: "689F",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "17:20:00",
    color: "#E30A16",
    dest_time: "18:44:00",
  },
  {
    train_id: "683A",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "18:11:00",
    color: "#E30A16",
    dest_time: "19:34:00",
  },
  {
    train_id: "7101",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "20:53:00",
    color: "#E30A16",
    dest_time: "22:14:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: PL,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}
