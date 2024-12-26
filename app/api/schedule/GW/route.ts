import { NextResponse } from "next/server";

const GW = [
  {
    train_id: "661",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "05:20:00",
    color: "#E30A16",
    dest_time: "06:15:00",
  },
  {
    train_id: "676",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "06:27:00",
    color: "#E30A16",
    dest_time: "06:51:00",
  },
  {
    train_id: "669A",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "06:33:00",
    color: "#E30A16",
    dest_time: "07:27:00",
  },
  {
    train_id: "677",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "07:42:00",
    color: "#E30A16",
    dest_time: "08:39:00",
  },
  {
    train_id: "662",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "07:46:00",
    color: "#E30A16",
    dest_time: "08:15:00",
  },
  {
    train_id: "670A",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "08:38:00",
    color: "#E30A16",
    dest_time: "09:04:00",
  },
  {
    train_id: "663",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "09:17:00",
    color: "#E30A16",
    dest_time: "10:16:00",
  },
  {
    train_id: "685F",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "09:36:00",
    color: "#E30A16",
    dest_time: "10:41:00",
  },
  {
    train_id: "678",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "09:46:00",
    color: "#E30A16",
    dest_time: "10:10:00",
  },
  {
    train_id: "671A",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "10:52:00",
    color: "#E30A16",
    dest_time: "11:47:00",
  },
  {
    train_id: "664",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "11:24:00",
    color: "#E30A16",
    dest_time: "11:50:00",
  },
  {
    train_id: "679",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "11:46:00",
    color: "#E30A16",
    dest_time: "12:41:00",
  },
  {
    train_id: "686F",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "11:52:00",
    color: "#E30A16",
    dest_time: "12:17:00",
  },
  {
    train_id: "672A",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "12:53:00",
    color: "#E30A16",
    dest_time: "13:18:00",
  },
  {
    train_id: "687F",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "13:03:00",
    color: "#E30A16",
    dest_time: "14:11:00",
  },
  {
    train_id: "673",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "14:09:00",
    color: "#E30A16",
    dest_time: "15:05:00",
  },
  {
    train_id: "680",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "14:16:00",
    color: "#E30A16",
    dest_time: "14:40:00",
  },
  {
    train_id: "681",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "15:21:00",
    color: "#E30A16",
    dest_time: "16:16:00",
  },
  {
    train_id: "688F",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "15:29:00",
    color: "#E30A16",
    dest_time: "15:53:00",
  },
  {
    train_id: "674",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "16:16:00",
    color: "#E30A16",
    dest_time: "16:41:00",
  },
  {
    train_id: "667",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "16:37:00",
    color: "#E30A16",
    dest_time: "17:32:00",
  },
  {
    train_id: "675",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "17:33:00",
    color: "#E30A16",
    dest_time: "18:28:00",
  },
  {
    train_id: "682A",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "17:35:00",
    color: "#E30A16",
    dest_time: "18:00:00",
  },
  {
    train_id: "689F",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "17:48:00",
    color: "#E30A16",
    dest_time: "18:44:00",
  },
  {
    train_id: "683A",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "18:39:00",
    color: "#E30A16",
    dest_time: "19:34:00",
  },
  {
    train_id: "668",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "18:41:00",
    color: "#E30A16",
    dest_time: "19:07:00",
  },
  {
    train_id: "690F",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "20:12:00",
    color: "#E30A16",
    dest_time: "20:38:00",
  },
  {
    train_id: "684",
    ka_name: "COMMUTER LINE YK",
    route_name: "YOGYAKARTA-PALUR",
    dest: "PALUR",
    time_est: "21:12:00",
    color: "#E30A16",
    dest_time: "21:38:00",
  },
  {
    train_id: "7101",
    ka_name: "COMMUTER LINE YK",
    route_name: "PALUR-YOGYAKARTA",
    dest: "YOGYAKARTA",
    time_est: "21:20:00",
    color: "#E30A16",
    dest_time: "22:14:00",
  },
];

export async function GET() {
  const response = {
    status: 200,
    message: "Success",
    data: GW,
  };

  return NextResponse.json(response); // Mengembalikan respons JSON
}